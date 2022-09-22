import html2canvas from 'html2canvas'

export interface ChunkOptionsType {
  data: number[]
  x: number
  y: number
  w: number
  h: number
  angle?: number
  speed?: number
  id?: string
}

export interface GetChunkInfoFunc {
  (index: number, x: number, y: number): Partial<ChunkOptionsType>
}

export class Chunk {
  public id: string

  public sourceData: number[]
  public imageData: ImageData

  public angle: number
  public speed: number
  public speedX: number
  public speedY: number

  public x: number
  public y: number
  public w: number
  public h: number

  constructor(options: ChunkOptionsType) {
    this.id = options.id || 'none'
    this.sourceData = options.data

    this.imageData = new ImageData(Uint8ClampedArray.from(this.sourceData), options.w, options.h)

    this.angle = options.angle || 0
    this.speed = options.speed || 1
    this.speedX = Math.cos((this.angle * Math.PI) / 180) * this.speed
    this.speedY = Math.sin((this.angle * Math.PI) / 180) * this.speed

    this.x = options.x
    this.y = options.y
    this.w = options.w
    this.h = options.h
  }

  step() {
    this.x += this.speedX
    this.y += this.speedY
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.step()
    ctx.putImageData(this.imageData, this.x, this.y)
  }
}

export class ChunkSplitManager {
  public ctx: CanvasRenderingContext2D
  public imageData: ImageData
  public chunks: Chunk[]

  public width: number
  public height: number
  public perWSize: number
  public perHSize: number

  public leftBoundary: number
  public rightBoundary: number
  public topBoundary: number
  public bottomBoundary: number

  constructor(
    public can: HTMLCanvasElement,
    public xCopies: number,
    public yCopies: number,
    public onStopRun: () => void
  ) {
    this.ctx = this.can.getContext('2d')!

    this.width = this.can.width
    this.height = this.can.height

    this.imageData = this.ctx.getImageData(0, 0, this.width, this.height)

    this.perWSize = Math.floor(this.width / xCopies)
    this.perHSize = Math.floor(this.height / yCopies)

    this.leftBoundary = -this.perWSize
    this.rightBoundary = this.width
    this.topBoundary = -this.perHSize
    this.bottomBoundary = this.height

    this.chunks = []
  }

  calcChunk(chunkX: number, chunkY: number) {
    let chunkData: number[] = []

    let xRange = [this.perWSize * chunkX, this.perWSize * (chunkX + 1)]
    let yRange = [this.perHSize * chunkY, this.perHSize * (chunkY + 1)]

    for (let y = yRange[0]; y < yRange[1]; y++) {
      for (let x = xRange[0]; x < xRange[1]; x++) {
        let i = (y * this.width + x) * 4
        chunkData.push(
          this.imageData.data[i],
          this.imageData.data[i + 1],
          this.imageData.data[i + 2],
          this.imageData.data[i + 3]
        )
      }
    }

    return chunkData
  }

  split(getChunkInfo: GetChunkInfoFunc) {
    let index = 0
    for (let y = 0; y < this.yCopies; y++) {
      for (let x = 0; x < this.xCopies; x++) {
        let {id, angle, speed} = getChunkInfo(index++, x, y) || {}
        this.chunks.push(
          new Chunk({
            data: this.calcChunk(x, y),
            id: id || 'chunk-' + index,
            x: x * this.perWSize,
            y: y * this.perHSize,
            w: this.perWSize,
            h: this.perHSize,
            angle: angle,
            speed: speed
          })
        )
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    for (let i = this.chunks.length - 1; i >= 0; i--) {
      if (
        this.chunks[i].x < this.leftBoundary ||
        this.chunks[i].x > this.rightBoundary ||
        this.chunks[i].y < this.topBoundary ||
        this.chunks[i].y > this.bottomBoundary
      ) {
        this.chunks.splice(i, 1)
      } else {
        this.chunks[i].draw(this.ctx)
      }
    }
  }

  fullScreen() {
    this.can.style.position = 'fixed'
    this.can.style.left = '0'
    this.can.style.right = '0'
    this.can.style.bottom = '0'
    this.can.style.top = '0'
    this.can.style.zIndex = '999999'
    document.body.append(this.can)
  }

  run = () => {
    if (this.chunks.length > 0) {
      this.draw()
      requestAnimationFrame(this.run)
    } else {
      this.onStopRun()
    }
  }
}

export default function tearPage(root: HTMLElement, callback: () => void) {
  html2canvas(root).then((can) => {
    let angles = [225, 315, 135, 45]
    let csm = new ChunkSplitManager(can, 2, 2, function () {
      csm.can.remove()
      callback()
    })
    csm.fullScreen()
    csm.split((i) => {
      return {
        angle: angles[i],
        speed: 30
      }
    })
    root.style.opacity = '0'
    csm.run()
  })
}

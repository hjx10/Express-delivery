<template>
  <div ref="scrollWrapper" class="al-scroll-wrapper">
    <div>
      <div class="scroll-top">
        <slot name="top" />

        <transition name="fade">
          <div
            v-show="isExpanding"
            class="indicator"
            :style="`box-shadow: ${indicatorWind}px 0 0 0 rgba(0, 0, 0, .3), -${indicatorWind}px 0 0 0 rgba(0, 0, 0, .3)`" />
        </transition>

        <div v-show="isExpanding" class="mask" :style="{opacity: maskOpacity}" />
      </div>

      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted} from 'vue'
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import ObserveImage from '@better-scroll/observe-image'
import MouseWheel from '@better-scroll/mouse-wheel'

BScroll.use(PullDown)
BScroll.use(ObserveImage)
BScroll.use(MouseWheel)

let props = defineProps({
  height: {
    type: String,
    required: false,
    default: 'auto'
  },
  initOptions: {
    type: Object,
    required: false,
    default: () => ({})
  }
})

let threshold = 150
let topHeight = 200 // 顶部高度
let leftTop = `-${topHeight}px`
let topDivHeight = `${topHeight}px`

let isExpanding = $ref(false)
let scrollWrapper = $ref(null)
let bs = $ref<BScroll | null>(null)
let indicatorWind = $ref(0)
let maskOpacity = $ref(0)

defineExpose({
  bs: $$(bs),
  refresh() {
    bs?.refresh()
  }
})

onMounted(() => {
  let _bs = new BScroll(scrollWrapper!, {
    ...props.initOptions,

    scrollX: false,
    scrollY: true,
    momentumLimitTime: 150,
    stopPropagation: false,
    preventDefaultException: {
      tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/,
      className: /(^|\s)enable-click(\s|$)/
    },

    observeImage: true,
    mouseWheel: true,
    pullDownRefresh: {
      threshold: threshold,
      stop: topHeight
    }
  })

  _bs.on('scroll', (e) => {
    if (e.y < threshold && e.y > 0) {
      if (!isExpanding) {
        isExpanding = true
      }

      maskOpacity = 1 - e.y / threshold
      indicatorWind = (30 * e.y) / threshold
    }
  })

  _bs.on('touchEnd', (e) => {
    if (e.y < threshold) {
      _bs.finishPullDown()
      _bs.stop()
    }
  })

  _bs.on('pullingDown', () => {
    isExpanding = false // 展开下滑菜单
  })

  bs = _bs
})

onUnmounted(() => {
  bs?.destroy()
})
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.al-scroll-wrapper {
  position: relative;
  overflow: hidden;
  height: v-bind(height);

  .scroll-top {
    position: absolute;
    top: v-bind(leftTop);
    overflow: hidden;
    width: 100%;
    height: v-bind(topDivHeight);
    background-color: #FFFFFF;

    .mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #3A91FA;
      filter: blur(5px);
    }

    .indicator {
      position: absolute;
      bottom: 10px;
      left: 50%;
      width: func.rpx(10);
      height: func.rpx(10);
      background-color: rgb(0 0 0 / 50%);
      border-radius: 50%;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>

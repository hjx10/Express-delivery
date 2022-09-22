/**
 * 产生指定位数的随机数
 * @param bit
 */
export function randomHash(bit) {
  return Math.random().toFixed(bit).slice(-bit)
}

/**
 * 产生指定范围的随机整数
 * @param {number} min
 * @param {number} max
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

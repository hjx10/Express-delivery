export let orderStatus = {
  unknown: 0, // 未知
  toBePaid: 1, // 待支付
  pendingOrder: 2, // 待接单
  pendingPickup: 3, // 待取货
  delivery: 4, // 配送中
  completed: 5, // 已完成
  cancelled: 6 // 已取消
}

export let orderType = {
  oneHour: 1, // 一小时订单
  buyMe: 2 // 帮我买订单
}

// 优惠卷触发状态
export let triggerStatus = {
  normal: 0, // 未触发
  invalid: 1 // 已经触发
}

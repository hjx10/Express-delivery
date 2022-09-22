<template>
  <div style="height: 8vw; margin-left: 2vw; background: #EEEEED; line-height: 8vw"> 联系方式</div>
  <input style="width: 100%; height: 9vw" />
  <div style="height: 8vw; margin-left: 2vw; background: #EEEEED; line-height: 8vw"> 反馈类别</div>
  <div>
    <van-radio-group v-model="checked">
      <van-cell-group inset>
        <van-cell title="产品功能" clickable @click="checked = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="配送服务" clickable @click="checked = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
        <van-cell title="价格问题" clickable @click="checked = '3'">
          <template #right-icon>
            <van-radio name="3" />
          </template>
        </van-cell>
        <van-cell title="其它" clickable @click="checked = '4'">
          <template #right-icon>
            <van-radio name="4" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>

  <div style="height: 8vw; margin-left: 2vw; background: #EEEEED; line-height: 8vw"> 补充描述</div>

  <van-cell-group inset>
    <van-field v-model="message" rows="2" autosize type="textarea" placeholder="请输入反馈内容" show-word-limit />
  </van-cell-group>
  <van-button type="primary" size="large" style="margin-top: 10px"> 提交</van-button>
</template>

<style>
.van-cell-group--inset {
  margin: 0;
  border-radius: 0;
}
</style>

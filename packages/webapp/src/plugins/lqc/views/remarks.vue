<template>
  <van-nav-bar title="填写备注" left-arrow @click-left="onClickLeft" />
  <div>
    <van-cell-group inset style="margin-top: 10px">
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="100"
        placeholder="请填写备注内容"
        show-word-limit />
    </van-cell-group>
  </div>
  <div>
    <van-button color="#303545" style="display: block; width: 80%; margin: 20px auto" type="primary"> 确认</van-button>
  </div>
</template>

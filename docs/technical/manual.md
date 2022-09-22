# 开发技术要点手册

## 实验版本组合式api

注意事项

> 推荐使用实验版本组合式api，但是不阻止使用普通组合式api，禁用选项式api

相关文档

- [组合式api教程](https://staging-cn.vuejs.org/tutorial/#step-1)
- [语法糖](https://staging-cn.vuejs.org/guide/extras/reactivity-transform.html)

举例说明

```vue
<template>
  <h1 class="text-center">
    Hello {{ msg }}
  </h1>
  <div class="index-container" />
</template>

<script lang="ts" setup>
let msg = $ref('Vue3')
</script>
```

## css单位

> 水平方向统一使用响应式单位

举例说明

```vue
<style lang="scss" scoped>
@use '@/styles/func.scss';

.index-container {
  width: func.rpx(100);
  margin-top: 15px;
  background: red;
}
</style>
```

## 集成tailwindcss

大多数时候可能会面临仅仅只有一个样式需要修改却不得不要为它命名一个class，
为了解决这一问题而引入tailwindcss，它像bootstrap一样但更加容易使用并且可以定制

举例说明

```html
<!--很容易实现一个方块-->
<div class="w-[100px] h-[100px] bg-[red]"></div>

<!--使用css封装，与上面一样效果-->
<div class="rect"></div>
<style>
  .rect{
    @apply w-[100px] h-[100px] bg-[red];
  }
</style>
```

## 自动路由

[![NPM version](https://img.shields.io/npm/v/@systemlight/auto-route-webpack-plugin.svg)](https://www.npmjs.com/package/@systemlight/auto-route-webpack-plugin)

> 为了方便开发，小兔快跑集成了自动路由插件，所有在views下模块按照约定规范即可自动生成路由无需配置

- [相关文档](https://v3.umijs.org/zh-CN/docs/convention-routing)

### 路由规则

#### 默认文件忽略规则

- 以 . 或 _ 开头的文件或目录
- 以 d.ts 结尾的类型定义文件
- 包含 test、spec、e2e 的测试文件（适用于 .js、.jsx 和 .tsx 文件）
- components 和 component 目录
- utils 和 util 目录
- 不是 .js、.jsx、.ts 或 .tsx 文件

#### 动态路由

- 约定 [] 包裹的文件或文件夹为动态路由。

比如：

```
src/pages/users/[id].tsx 会成为 /users/:id
src/pages/users/[id]/settings.tsx 会成为 /users/:id/settings
```

- 约定 [ $] 包裹的文件或文件夹为动态可选路由

#### 嵌套路由

约定目录下有 _layout.tsx 时会生成嵌套路由，以 _layout.tsx 为该目录的 layout

## 网络请求

- 所有请求必须调用 @/utils/request 下的 request 方法进行api请求封装，按模块进行区分

api/user.js

```javascript
export function getUser(id) {
  return request({
    url: `/user/${id}`,
    method: 'GET'
  })
}
```

views/user.vue

```vue
<script lang="ts" setup>
import {getUser} from '@/api/user'

getUser(id).then(({data})=>{
  console.log(data) // 打印给定ID的用户信息
})
</script>
```

## lint规范

- 禁止结尾分号
- 禁止js中使用双引号
- 代码需要经常性格式化
- 提交时会自动做lint检查，不通过将提交失败
- 导入 import 规范，第一级写系统级模块，第二级写三方模块，第三级写项目内模块，每级需要有空格

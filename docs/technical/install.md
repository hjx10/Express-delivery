# 项目安装

> 小兔快跑使用`pnpm`作为包管理器，同时做`monorepo`模式划分模块

## 安装

### 安装pnpm

- 依赖node16.15.0，推荐使用 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 做node版本管理

```shell
npm i pnpm -g
```

### 还原依赖

```shell
# 递归安装所有子模块包
pnpm i -r
```

### 安装模块

```shell
# 为指定模块进行安装包
pnpm add <packageName> -F <MyPackageName>
```

### 运行webapp

```shell
pnpm run dev:webapp:serve
```

### 运行后端server

```shell
pnpm run pro:server:serve
```

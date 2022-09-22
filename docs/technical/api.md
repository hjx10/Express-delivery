# 接口文档

> 接口统一前缀：/api

## 状态码说明

- 20000: 正常返回
- 50001: 通用错误
- 50008: Illegal token
- 50012: Other clients logged in
- 50014: Token expired
- 50404: Not found

## /oauth/login

> 登陆功能

### 方法

POST

### 参数

- phone：用户手机
- code：验证码

### 返回选项

- 格式：json

```json
{
  "code": 20000,
  "msg": "ok"
}
```

- [更多接口请查看-apifox](https://www.apifox.cn/apidoc/project-1433582/api-34001218)

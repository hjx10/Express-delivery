# 数据库

## 类型

- mysql

## mysql连接地址

- 开发地址
  - url: lisys.club:3306
  - database: rabbit_run
  - username: rabbit_run
  - password: rabbit_run

## 关系表格设计

### rr_user - 用户表

| 字段名     | 类型  | 功能    |
|---------|-----|-------|
| id      | int | 自增ID  |
| role_id | int | 用户角色表 |

### rr_role - 角色表

| 字段名 | 类型  | 功能   |
|-----|-----|------|
| id  | int | 自增ID |

### rr_user_role - 用户角色表

| 字段名 | 类型  | 功能   |
|-----|-----|------|
| id  | int | 自增ID |

### rr_connect - 在线客服会话表

| 字段名              | 类型  | 功能   |
|------------------|-----|------|
| id               | int | 自增ID |
| user_id          | int | 用户   |
| customer_user_id | int | 客服   |

### rr_order - 订单表

| 字段名             | 类型  | 功能       |
|-----------------|-----|----------|
| id              | int | 自增ID     |
| user_id         | int | 用户外键关联ID |
| to_address_id   | int | 发送地址ID   |
| from_address_id | int | 接收地址ID   |
| status          | int | 状态       |

### rr_address_record - 用户地址表

| 字段名     | 类型  | 功能       |
|---------|-----|----------|
| id      | int | 自增ID     |
| user_id | int | 用户外键关联ID |

### rr_coupon - 优惠卷

| 字段名            | 类型  | 功能       |
|----------------|-----|----------|
| id             | int | 自增ID     |
| coupon_code_id | int | 优惠卷兑换码详情 |

### rr_user_coupon - 用户优惠卷关系表

| 字段名       | 类型  | 功能    |
|-----------|-----|-------|
| id        | int | 自增ID  |
| user_id   | int | 用户外键  |
| coupon_id | int | 优惠卷外键 |
| trigger   | int | 派发时机  |

### rr_coupon_code - 优惠卷兑换码

| 字段名       | 类型  | 功能    |
|-----------|-----|-------|
| id        | int | 自增ID  |

## rr_feedback - 用户反馈表

| 字段名       | 类型  | 功能    |
|-----------|-----|-------|
| id        | int | 自增ID  |

## rr_question - 用户问题表

| 字段名       | 类型  | 功能    |
|-----------|-----|-------|
| id        | int | 自增ID  |

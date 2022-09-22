/*
 Navicat Premium Data Transfer

 Source Server         : rabbit-run
 Source Server Type    : MySQL
 Source Server Version : 50734
 Source Host           : lisys.club:3306
 Source Schema         : rabbit_run

 Target Server Type    : MySQL
 Target Server Version : 50734
 File Encoding         : 65001

 Date: 06/08/2022 13:40:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for rr_address_record
-- ----------------------------
DROP TABLE IF EXISTS `rr_address_record`;
CREATE TABLE `rr_address_record` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `address` varchar(500) DEFAULT NULL COMMENT '地址',
  `house_number` varchar(500) DEFAULT NULL COMMENT '门牌号',
  `contact` varchar(500) DEFAULT NULL COMMENT '联系人',
  `phoone` varchar(100) DEFAULT NULL COMMENT '电话',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_address_record
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_connect
-- ----------------------------
DROP TABLE IF EXISTS `rr_connect`;
CREATE TABLE `rr_connect` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(10) unsigned NOT NULL,
  `customer_user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_connect
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_coupon
-- ----------------------------
DROP TABLE IF EXISTS `rr_coupon`;
CREATE TABLE `rr_coupon` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '券的状态',
  `kind` int(11) NOT NULL DEFAULT '0' COMMENT '优惠券种类',
  `satisfy` double NOT NULL DEFAULT '0.1' COMMENT '满足多少可以触发',
  `discount` double NOT NULL DEFAULT '1' COMMENT '优惠价格',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_coupon
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_coupon_code
-- ----------------------------
DROP TABLE IF EXISTS `rr_coupon_code`;
CREATE TABLE `rr_coupon_code` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `code` varchar(500) NOT NULL COMMENT '兑换码',
  `coupon_id` int(10) unsigned NOT NULL COMMENT '兑换券',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_coupon_code
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_feedback
-- ----------------------------
DROP TABLE IF EXISTS `rr_feedback`;
CREATE TABLE `rr_feedback` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `phone` varchar(100) NOT NULL COMMENT '联系方式',
  `kind` int(11) NOT NULL COMMENT '反馈类别',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_feedback
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_order
-- ----------------------------
DROP TABLE IF EXISTS `rr_order`;
CREATE TABLE `rr_order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(10) unsigned NOT NULL COMMENT '用户id',
  `pay_id` int(10) unsigned NOT NULL COMMENT '支付明细id',
  `to_address_id` int(10) unsigned NOT NULL COMMENT '发送地址id',
  `from_address_id` int(10) unsigned NOT NULL COMMENT '接收地址的id',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '当前状态',
  `cancel_reason` varchar(500) DEFAULT NULL,
  `code` varchar(50) NOT NULL COMMENT '收货码',
  `expect_timestamp` timestamp NOT NULL COMMENT '期望取货时间',
  `kind` varchar(500) NOT NULL COMMENT '物品类型',
  `price` varchar(100) NOT NULL COMMENT '物品价格',
  `weight` int(11) NOT NULL DEFAULT '0' COMMENT '物体重量',
  `distance` double NOT NULL DEFAULT '0' COMMENT '配送距离',
  `discount_price` double NOT NULL DEFAULT '0' COMMENT '优惠价格',
  `order_type` int(11) NOT NULL DEFAULT '0' COMMENT '订单类型',
  `source` varchar(200) DEFAULT '达达快递' COMMENT '来源',
  `name` varchar(200) DEFAULT NULL COMMENT '配送物品名称',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  `delivery_fee` double NOT NULL DEFAULT '0' COMMENT '配送费',
  `markup` double NOT NULL DEFAULT '0' COMMENT '动态加价',
  `tip` double NOT NULL DEFAULT '0' COMMENT '小费',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_order
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_question
-- ----------------------------
DROP TABLE IF EXISTS `rr_question`;
CREATE TABLE `rr_question` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(500) DEFAULT NULL COMMENT '问题',
  `answer` varchar(500) NOT NULL COMMENT '答案',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_question
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_role
-- ----------------------------
DROP TABLE IF EXISTS `rr_role`;
CREATE TABLE `rr_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL COMMENT '角色名称',
  `role` int(11) NOT NULL DEFAULT '0' COMMENT '角色代码',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `enable` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_role
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_user
-- ----------------------------
DROP TABLE IF EXISTS `rr_user`;
CREATE TABLE `rr_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `nicnname` varchar(512) DEFAULT NULL,
  `phone` varchar(100) NOT NULL,
  `balance` int(11) NOT NULL DEFAULT '0',
  `bdcode` varchar(100) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `enable` tinyint(4) NOT NULL DEFAULT '1',
  `role_id` int(11) NOT NULL,
  `online` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_user
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_user_coupon
-- ----------------------------
DROP TABLE IF EXISTS `rr_user_coupon`;
CREATE TABLE `rr_user_coupon` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(10) unsigned NOT NULL,
  `coupon_id` int(10) unsigned NOT NULL,
  `trigger` int(11) NOT NULL DEFAULT '0' COMMENT '触发时机',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_user_coupon
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for rr_user_role
-- ----------------------------
DROP TABLE IF EXISTS `rr_user_role`;
CREATE TABLE `rr_user_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(10) unsigned NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rr_user_role
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

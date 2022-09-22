# git操作指南

## 获取项目

```shell
git clone --branch dev https://gitee.com/SystemLight/rabbit-run
```

## 查看分支

```shell
# 查看所有分支
git branch -a

# 查看当前分支
git branch
```

## 切换远程dev分支

```shell
git checkout -b dev origin/dev
```

## 提交项目

```shell
git pull
git add .
git commit -m "[提交信息]"
git push
```

[提交信息] = [tag]: [message]

[tag] =

- build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
- docs：文档更新
- feat：新增功能
- fix：bug 修复
- test：增加测试
- perf：性能优化
- refactor：重构代码(既没有新增功能，也没有修复 bug)
- style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
- test：新增测试用例或是更新现有测试
- revert：回滚某个更早之前的提交
- chore：不属于以上类型的其他类型(日常事务)

注意事项

- master分支禁止推送，推送也会失败请切换dev分支进行提交
- 所有人员必须只在dev分支下进行开发，禁止向master分支下上传文件
- 严格按照规范进行提交文档

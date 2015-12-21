# 前端需要的接口

## 用户
* 注册
* 登录
* 登出

## hoods  && blocks
* 拉取hoods列表
* 根据hoods id拉取blocks
* join 某个block
* 拉取某个block的成员列表
* 关注某个成员

## messages (暂不做回复)
* 拉取消息列表, 注意这里要支持筛选，有下面四个type:
-- all
-- private
-- friends
-- blocks
* post 一个 message

## friends 
* 拉取好友列表
* 删除好友
* 发送好友请求
-- 这里有个比较蛋疼的是前端用户只能输入用户名(nick_name),后台根据nick_name加好友
* 拉取好友请求列表
* 同意／拒绝 好友请求

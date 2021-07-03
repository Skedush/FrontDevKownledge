1. chrome 91 版本更新因为同源策略导致不使用 https cookie 传不到不同源的后台使用

```
open -a Google\ Chrome --args --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure
```

> chrome 之前版本在 chrome://flags 中修改配置即可

2. swagger editor 中复制下来的接口编码不对，虽然在 vscode 中显示没问题，但是手打一遍接口地址使用搜索功能两个单词一模一样但不能匹配的。

3.

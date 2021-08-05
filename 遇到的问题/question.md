1. chrome 91 版本更新因为同源策略导致不使用 https cookie 传不到不同源的后台使用

```
open -a Google\ Chrome --args --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure
```

> chrome 之前版本在 chrome://flags 中修改配置即可

2. swagger editor 中复制下来的接口编码不对，虽然在 vscode 中显示没问题，但是手打一遍接口地址使用搜索功能两个单词一模一样但不能匹配的。

3. hooks 没有 componentDidCatch 生命周期，用 hooks 也模拟不出来，只能使用 try catch，也许会造成性能问题。使用混编解决。

### Taro

1. Taro 的 jsx 中不能使用匿名函数, 需要 bind
2. 组件的事件传递都要以 on 开头
3. 禁止使用 Object 构造器
4. 不要在调用 this.setState 时使用 this.state
5. 使用外部样式类可以让组件使用指定的组件外样式类，如果希望组件外样式类能够完全影响组件内部，可以将组件构造器中的 options.addGlobalClass 字段置为 true。这个特性从小程序基础库版本 2.2.3 开始支持。
6. 深层嵌套到第 15 层 text 样式丢失， 节点不能包括 view 节点，这是小程序的原因，我认为这样做也没错。你把最后 16 的 text 标签改为 view 就行了，后来根治了。
7. v2.3 版本，将组件内的用户输入的值提交。由于小程序组件化的限制，要触发 onSubmit，必须使用 AtButton 且设置 formType='submit'，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取



### css

mac设置了减弱动画效果，使用比较严谨的第三方库有@media prefers-reduced-motion检测用户的系统是否被开启了动画减弱功能。 导致加的动画看不到效果。




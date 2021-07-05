"use strict";
//启用严格模式，在脚本开头加上这一行

function doSomething() {
  "use strict";
  // 函数体
}
//单独指定一个函数在严格模式下执行

//始终在控制语句中 使用代码块，即使要执行的只有一条语句
// 有效，但容易导致错误，应该避免
if (test) console.log(test);

//推荐
if (test) {
  console.log(test);
}

/* 关键字与保留字
break       do		    in          typeof
case        else	    instanceof  var
catch       export	    new      	void
class       extends	    return     	while
const       finally	    super		with
continue    for		    switch      yield
debugger    function    this				
default     if          throw				 
delete		import	    try
*/

/*严格模式下
implements  package     public
interface   protected   static
let         private
*/

/*始终保留
enum
*/

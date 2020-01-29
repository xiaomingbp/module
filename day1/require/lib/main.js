require(["dom","alert"],function(a,b){   // 第一个参数[]是依赖项，第二个参数是回调函数
	console.log(a.Id("abc"))
	console.log(a.Class("edf"))
	b.show("你好");
}) // 主模块
require.config({
	baseUrl:"js/"
})

require(["getDOM","tab1","data","myWin"],function(D,tab,data,W){
	new tab({
		data:data,
		btns:D(".btns"),
		cons:D(".cons")
	})

	D(".queren").onclick = function(){
		//W.alert("你好");
		// W.prompt("请输入密码：","",function(data){
		// 	console.log(data);
		// });
		W.confirm("是否删除？",function(data){
			console.log(data);
		})
	}
	
})
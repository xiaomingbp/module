require.config({
	baseUrl:"js/"
})

require(["getDOM","css","cel"],function(D,Style,C){
	//点击页面上的确认按钮
	D(".btn").onclick = function(){
		//创建一个元素 
		//tagName == 下拉菜单的选项值
		var tag = C.create(D(".sel").value,"click",function(){
			console.log("ok")
		})

		// 给元素设置样式
		Style.css(tag,{
			width:"100px",
			height:"100px",
			backgroundColor:"red"
		})

		//添加到页面里
		document.body.appendChild(tag)
	}
	
})
require.config({
	baseUrl:"js/"
})

require(["getDOM","myWin"],function($,W){

	$(".btn").onclick = function(){
		W.alert("点击a标签弹出的框")
	}
	
})

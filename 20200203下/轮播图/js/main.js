require.config({
	baseUrl:"js/"
})

require(["getDOM","swaper"],function(D,S){
	/*		
		obj.box盒子
		obj.imgs所有图片
		obj.prevbtn上一个按钮
		obj.nextbtn下一个按钮
		obj.focusss所有焦点按钮
	*/
	new S({
		box:D(".box"),
		imgs:[...D(".imgs img")],
		prevbtn:D(".prevbtn"),
		nextbtn:D(".nextbtn"),
		focusss:[...D(".focuss span")],
		timer:500
	});
})
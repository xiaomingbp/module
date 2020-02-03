require.config({
	baseUrl:"js/"
})

require(["getDOM","tab"],function(D,Tab){
	//携程
	new Tab({
		btns:D(".box_left"),
		cons:D(".box_right")
	})

	//酒店
	new Tab({
		btns:D(".jiudian").children[0],
		cons:D(".jiudian").children[1]
	})

	//机票
	new Tab({
		btns:D(".jipiao").children[0],
		cons:D(".jipiao").children[1]
	})

	//旅游
	new Tab({
		btns:D(".lvyou").children[0],
		cons:D(".lvyou").children[1]
	})
	
	// .......
})
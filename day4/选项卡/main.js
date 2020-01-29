require(["tab"],function(tab){
	new tab({
		btns:[...document.querySelectorAll(".btns>span")],
		cons:[...document.querySelectorAll(".cons>div")]
	})
})
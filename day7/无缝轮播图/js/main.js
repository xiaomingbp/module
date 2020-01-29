require.config({
	baseUrl:"js/"
})

require(["swaper"],function(Swaper){
	new Swaper({
		box:document.querySelector(".swaper"),
		imgs:document.querySelector(".swaper .imgs"),
		prevbtn:document.querySelector(".prev"),
		nextbtn:document.querySelector(".next"),
		focuss:document.querySelectorAll(".focus span"),
		visible:true,
		timer:2000
	})
})
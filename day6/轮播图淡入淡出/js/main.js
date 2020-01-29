require.config({
	baseUrl:"js/"
})

require(["swaper"],function(Swaper){
	new Swaper({
		box:document.querySelector(".swaper"),
		imgs:document.querySelectorAll(".swaper img"),
		prevbtn:document.querySelector(".prev"),
		nextbtn:document.querySelector(".next"),
		focuss:document.querySelectorAll(".focus span"),
		timer:2000
	})
})
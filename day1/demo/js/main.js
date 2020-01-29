require(["lib/getDOM"],function(dom){
	var app = dom.getId("app")
	app.addEventListener("click",function(){
		alert(123);
	})
})
require(["alert"],function(a){
	var btn = document.getElementById("btn");

	btn.onclick = function(){
		a.render("你好")
	}

})
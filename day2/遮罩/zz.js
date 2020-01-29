define(function(){
	var btn = document.querySelector(".btn");
	var zhezhao = document.querySelector(".zhezhao");
	var close = document.querySelector(".close")
	btn.onclick = function(){
		zhezhao.classList.add("active")
	}
	close.onclick = function(){
		zhezhao.classList.remove("active")
	}
})

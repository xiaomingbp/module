define(function(){
	function getId(id){
		return document.querySelector("#" + id);
	}

	function getClass(className){
		var doms = document.querySelectorAll("." + className);
		return doms.length > 1 ? doms : doms[0];
	}
	return {
		getId:getId, // 将模块里的属性和方法暴露给外面
		getClass:getClass
	}
})
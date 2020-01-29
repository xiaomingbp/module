define([],function(){ // 参数跟主模块的参数一样
	var obj = {
		Id:function(selector){
			return document.querySelector("#" + selector)
		},
		Class:function(selector){
			var doms = document.querySelectorAll("." + selector)
			return doms.length > 1 ? doms:doms[0]
		}
	}
	return obj;
})
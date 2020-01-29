define(function(){
	return function(selector){
		var doms = document.querySelectorAll(selector);
		return doms.length > 1 ? doms : doms[0]
	}
})
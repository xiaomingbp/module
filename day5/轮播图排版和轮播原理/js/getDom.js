define(function(){
	return {
		getId(id){
			return document.querySelector(id);
		},
		getClass(ClassName){
			var doms = document.querySelectorAll(ClassName);
			return doms.length > 1 ? doms : doms[0]
		}
	}
})
define(function(){
	function Create(tagName,type,fn){
		var tag = document.createElement(tagName); // tagname是标签名
		if(type){
			tag.addEventListener(type,fn);//type事件类型，fn是事件处理函数
		}
		return tag;		
	}
	return {
		create:Create
	}
})



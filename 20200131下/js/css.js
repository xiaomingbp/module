define(function(){
	function setCss(el,css){
		for(var attrname in css){
			el.style[attrname] = css[attrname];
		}
	}
	return {
		css:setCss
	}
})
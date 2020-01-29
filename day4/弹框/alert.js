define(function(){

	function Alert(){

	}
	Alert.prototype.render = function(text){

		var div = document.createElement("div");
		div.style.cssText = "width:300px;height:100px;box-shadow:0 0 5px #000;"
		div.innerHTML = text;
		document.body.appendChild(div)

	}

	return new Alert();

})
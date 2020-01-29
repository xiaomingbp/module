define(["velocity.min"],function(V){

	function Alert(obj){
		var div = document.createElement("div");
		div.style.cssText = `
			width:200px;
			height:50px;
			background-color:rgba(255,0,0,0.5);
			position:fixed;
			top:50%;
			left:50%;
			margin-left:-100px;
			margin-top:-25px;
			text-align:center;
			line-height:50px;
			display:none;
		`
		div.innerHTML = obj.text;

		document.body.appendChild(div);
		V(div,"fadeIn",500,{
			duration:500,
			delay:500
		});
		V(div,"fadeOut",{
			duration:500,
			delay:2000
		});
	}

	return {
		alert:Alert
	}
})
define(["../js/velocity.min"],function(){
	function Alert(text){
		var div = document.createElement("div");
		div.style.cssText = `
			width:1000px;
			height:40px;
			border-radius:5px;
			background-color:rgba(255,0,0,0.2);
			position:absolute;
			top:10%;
			left:50%;
			margin-left:-500px;
			text-align:center;
			line-height:40px;
			display:none;
		`;
		div.innerHTML = text;
		document.body.appendChild(div);
		Velocity(div,"fadeIn");

		Velocity(div,"fadeOut",{
			delay:1000,
			complete:function(){
	            div.remove();
	        }
		});		
	}
	return Alert;
});
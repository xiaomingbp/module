define(["lib/getDOM"],function(dom){
	function Drag(obj){
		this.box = dom.getClass(obj.box)
		this.bindEvent();
	}
	Drag.prototype.bindEvent = function(){
		var that = this;
		var offx = 0;
		var offy = 0;
		var flag = false;
		this.box.addEventListener("mousedown",function(e){
			flag = true;
			offx = e.offsetX;
			offy = e.offsetY;
		})
		document.addEventListener("mousemove",function(e){
			if(flag){
				that.box.style.left = e.pageX - offx + "px"
				that.box.style.top =  e.pageY - offy + "px"
			}			
		});
		document.addEventListener("mouseup",function(e){
			flag = false;	
		});
	}
	return Drag;
})
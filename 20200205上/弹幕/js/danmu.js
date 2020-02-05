define(function(){
	/*
		box显示弹幕的盒子
		msglistul显示信息的盒子
		text文本框
		btn提交按钮
	 */

	function Danmu(obj){
		var defaults = {

		}
		Object.assign(this,defaults,obj);
		this.init();
	}

	Danmu.prototype = {
		constructor:Danmu,
		init(){
			this.bindEvent();
		},
		move(value){
			var that = this;
			var box_height = this.box.offsetHeight;
			var pos_top = Math.floor(Math.random() * (box_height-25));

			var span = document.createElement("span");	
			this.box.appendChild(span);
			span.innerHTML = value;
			span.style.cssText = `
				position:absolute;
				background-color:rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)});
				display:inline-block;
				height:25px;
				line-height:25px;
				padding:0px 10px;
				border-radius:10px;
				top:${pos_top}px;						
			`
			
			var pos_right = -span.offsetWidth;
			span.style.right = pos_right + "px";

			
			var t = setInterval(function(){
				pos_right += 2;
				span.style.right = pos_right + "px";
				if(pos_right > that.box.offsetWidth){
					clearInterval(t);
					span.remove();
				}
			},1000/60);


		},
		bindEvent(){
			var that = this;
			this.btn.addEventListener("click",function(){
				var text = that.text.value
				that.msglistul.innerHTML += `<li>${text}</li>`;

				that.move(text);


				that.text.value = ""
			})
		}
	}

	return Danmu;
})
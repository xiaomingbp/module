define(function(){
	function Menu(obj){
		/*
			data数据,
			menu一级数据渲染的盒子
			main二级数据渲染的盒子
		 */
		var defaults = {

		}
		Object.assign(this,defaults,obj);
		this.init();
	}
	Menu.prototype = {
		constructor:Menu,
		init(){
			this.renderOne();
			this.bindEvent();
		},
		renderOne(){
			this.menu.innerHTML = this.data.map(function(item,index){
				return `
					<div class="left" data-index="${index}">${item.oneTitle}</div>
				`
			}).join("");
		},
		renderTwo(index){
			this.main.innerHTML = this.data[index].content.map(function(item){
				return `
					<div>${item.twoTitle}</div>
				`
			}).join("")
		},
		bindEvent(){
			var that = this;
			var t = null;
			this.menu.addEventListener("mouseover",function(e){
				if(e.target.classList.contains("left")){
					clearTimeout(t);
					that.main.classList.add("active")
					that.renderTwo(e.target.getAttribute("data-index"));
				}				
			})

			this.menu.addEventListener("mouseout",function(e){
				if(e.target.classList.contains("left")){
					t = setTimeout(function(){
						that.main.innerHTML = "";
						that.main.classList.remove("active");
						console.log(e.target,t)
					},300);						
				}
			})

			that.main.addEventListener("mouseover",function(){
				clearTimeout(t)
			})

			that.main.addEventListener("mouseout",function(){
				t = setTimeout(function(){
					that.main.innerHTML = "";
					that.main.classList.remove("active");
				},300);	
			})
		
		}
	}
	return Menu;
})
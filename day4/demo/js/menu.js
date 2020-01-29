define(["Velocity.min"],function(V){
	function Menu(obj){
		Object.assign(this,obj);
		this.init();
	}
	Menu.prototype = {
		constructor:Menu,
		init(){			
			this.bindEvent();
		},
		show(){

		},
		bindEvent(){
			var that = this;
			this.top_btn.addEventListener("click",function(){
				that.menu_title.forEach(function(el){
					el.classList.remove("active")
				})
				if(that.menu.classList.contains("active")){
					that.menu.classList.remove("active")
					V(that.menu,{width:"270px"},{duration:500});
				}else{
					that.menu.classList.add("active")
					V(that.menu,{width:"55px"},{duration:500});
				}				
			})
			this.menu_title.forEach(function(item){
				item.addEventListener("click",function(){
					that.menu_title.forEach(function(el){
						el.classList.remove("active")
					})
					item.classList.add("active");

				});
			});
		}
	}
	return Menu;
})
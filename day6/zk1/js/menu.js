define(["velocity.min"],function(V){
	function Menu(obj){
		Object.assign(this,obj)
		this.init();
	}
	Menu.prototype = {
		constructor:Menu,
		init(){
			this.render();
			this.bindEvent();
		},
		render(){
			this.menuList.innerHTML = this.data.map(function(item){
				var erHTMl = item.children.map(function(el){
					return `<li>${el}</li>`
				}).join("")


				return `
					<div class="menu_item">
						<div class="title">
							<div class="tubiao"></div>
							<div>${item.title}</div>
							<div class="sanjiao">></div>
						</div>
						<ul>
							${erHTMl}
						</ul>
					</div>
				`
			}).join("")
		},
		bindEvent(){
			var that = this;
			var flag = true;
			this.menuTop.addEventListener("click",function(){
				V(that.menuBox,{
					width:flag?"30px":"200px"
				},{
					duration:800,
					begin(){
						var old = that.menuList.querySelector(".active");
						if(old){
							V(old.nextElementSibling,"slideUp",100)
							V(old.lastElementChild,{
								rotateZ:0
							},{
								duration:300
							})
							old.classList.remove("active")
						}
					},
					complete(){
						flag = !flag;						
					}
				})
			})
			this.menuList.addEventListener("click",function(e){
				if(e.target.parentNode.classList.contains("title")){
					var old = that.menuList.querySelector(".active");
					if(old){
						V(old.nextElementSibling,"slideUp",300)
						V(old.lastElementChild,{
							rotateZ:0
						},{
							duration:300
						})
						old.classList.remove("active")
					}
					e.target.parentNode.classList.add("active");
					V(e.target.parentNode.nextElementSibling,"slideDown",300)					
					V(e.target.parentNode.lastElementChild,{
						rotateZ:90
					},{
						duration:300
					})
				}
			},false)
		}
	}
	return Menu;
})
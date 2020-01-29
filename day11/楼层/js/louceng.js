define(["velocity.min"],function(V){
	function Louceng(obj){
		Object.assign(this,obj);
		this.init();
	}

	Louceng.prototype = {
		constructor:Louceng,
		init(){
			this.rander();
			this.bindEvent();
		},
		rander(){
			this.randerContent();
			this.randerTitle();
		},
		randerContent(){
			this.box.innerHTML = this.data.map(function(item){
				return `<div style="background-color:${item.color}">${item.content}</div>`
			}).join("")
		},
		randerTitle(){
			this.fixed.innerHTML = this.data.map(function(item,index){
				return `<div index="${index}" style="background-color:${item.color}">${item.title}</div>`
			}).join("")
		},
		bindEvent(){
			var that = this;
			this.fixed.addEventListener("click",function(e){
				if(e.target.parentNode.classList.contains("fixed")){
					var index = e.target.getAttribute("index");
					that.fixed.children[index].classList.add("active");
					V(that.box.children[index],"scroll",{
				        duration:500,
				        easing:"ease-in-out"
				    })
				}
			})


			document.addEventListener("scroll",function(){
				var scrolltop = document.body.scrollTop + document.documentElement.scrollTop;
				var cons = [...that.box.children];
				cons.forEach(function(item,index){
					if(Math.ceil(scrolltop) >= item.offsetTop){
						[...that.fixed.children].forEach(function(el){
							el.classList.remove("active")
						})
						that.fixed.children[index].classList.add("active");
					}else{
						that.fixed.children[index].classList.remove("active");
					}
				})
			})
		}
	}


	return Louceng;
})
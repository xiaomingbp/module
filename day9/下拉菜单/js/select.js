define(function(){
	function Select(obj){
		Object.assign(this,obj);
		this.index = -1;
		this.init();
	}
	Select.prototype = {
		constructor:Select,
		init(){
			this.rander(this.data);
			this.bindEvent();
		},
		rander(arr){
			this.list.innerHTML = arr.map(function(item){
				return `
					<li>${item}</li>
				`
			}).join("")
		},
		changeItem(){
			[...this.list.children].forEach(function(item){
				item.classList.remove("active")
			})
			this.list.children[this.index].classList.add("active")
		},
		bindEvent(){
			var that = this;
			//输入框获取到焦点时显示下拉项
			this.search.addEventListener("focus",function(){
				that.list.classList.add("active")
			})

			//点击输入框以外的任何地方都隐藏
			document.addEventListener("click",function(e){
				if(!e.target.classList.contains("search")){
					that.list.classList.remove("active")
				}
			})

			//点击下拉项时获取下拉项的内容
			this.list.addEventListener("click",function(e){
				if(e.target.tagName === "LI"){
					//console.log(e.target.innerHTML)
					that.fn(e.target.innerHTML);
					//that.box.innerHTML += `<span>${e.target.innerHTML}</span>`
				}
			})

			//滑过高亮
			// this.list.addEventListener("mouseover",function(e){
			// 	if(e.target.tagName === "LI"){
			// 		[...that.list.children].forEach(function(item){
			// 			item.classList.remove("active")
			// 		})
			// 		e.target.classList.add("active")
			// 	}
			// })
			
			var lis = [...that.list.children]
			lis.forEach(function(item,index){
				item.addEventListener("mouseover",function(){
					that.index = index;
					that.changeItem();
				})
			})

			//键盘事件
			this.search.addEventListener("keydown",function(e){
				//上
				if(e.keyCode === 38){
					that.index--;
					if(that.index < 0){
						that.index = that.list.children.length - 1;
					}
					that.changeItem();
				}
				//下
				if(e.keyCode === 40){
					that.index++;
					if(that.index > that.list.children.length - 1){
						that.index = 0;
					}
					that.changeItem();
				}
				//回车
				if(e.keyCode === 13){
					var aaaa = that.list.querySelector(".active").innerHTML
					that.fn(aaaa);
					//that.box.innerHTML += `<span>${aaaa}</span>`
					//that.list.classList.remove("active")
				}
			})


			//模糊搜索
			this.search.addEventListener("input",function(){				
				var data = that.data.filter(function(item){
					//return item.indexOf(that.search.value) != -1
					return item.includes(that.search.value)
				})
				that.rander(data);

			})
			
		}
	}

	return Select;
})
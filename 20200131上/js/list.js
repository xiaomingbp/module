define(function(){
	function List(obj){
		var defaults = {

		}
		Object.assign(this,defaults,obj);
		this.init();
	}


	List.prototype = {
		constructor:List,
		init(){
			this.render();
			this.bindEvent();
		},
		render(){
			this.box.innerHTML = this.data.map(function(item){
				return `
					<div><span class="name">${item.name}</span><span class="age">${item.age}</span><span class="sex">${item.sex}</span><input type="button" data-id="${item.id}" value="删除" class="del"></div>
				`
			}).join("");
		},
		add(item){
			if(this.data.length == 0){
				item.id = 1;
			}else{
				item.id = this.data[this.data.length - 1].id + 1;
			}
			this.data.push(item);
			this.render();
		},
		del(id){
			this.data = this.data.filter(function(item){
				return item.id != id;
			})
			this.render();			
		},
		bindEvent(){
			var that = this;
			this.box.addEventListener("click",function(e){
				if(e.target.classList.contains("del")){
					that.del(e.target.getAttribute("data-id"))
				}
			});
		}
	}

	return List;
})
define(function(){
	function List(obj){
		/*
		 	data
			box
		 */
		Object.assign(this,obj);
		this.init();
	}
	List.prototype = {
		constructor:List,
		init(){
			this.render();
			this.bindEvent();
		},
		sort(attr){
			this.data.sort(function(a,b){
				if(a[attr] < b[attr]){
					return -1;
				}
				if(a[attr] > b[attr]){
					return 1
				}
				return 0;
			})
			this.render();
		},
		del(id){
			this.data = this.data.filter(function(item){
				return item.id != id;
			})
			this.render();
		},
		render(){
			this.box.innerHTML = this.data.map(function(item){
				return `<tr>
					<td>${item.id}</td>
					<td>${item.name}</td>
					<td>${item.age}</td>
					<td>${item.sex}</td>
					<td><input type="button" data-id="${item.id}" class="del" value="删除" /></td>
				</tr>`
			}).join("");
		},
		bindEvent(){
			var that = this;
			this.box.addEventListener("click",function(e){
				if(e.target.classList.contains("del")){
					that.del(e.target.getAttribute("data-id"))
				}
			})
		}
	}

	return List;
})
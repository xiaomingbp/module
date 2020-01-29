define(function(){
	function List(obj){
		Object.assign(this,obj);
		this.init();
	}
	List.prototype = {
		constructor:List,
		//初始化方法
		init(){
			this.rander()
			this.bindEvent();
		},
		//添加信息
		add(data){
			this.data.push(data);
			this.rander();
		},
		//删除信息
		del(obj){
			this.data = this.data.filter(function(item){
				return !(item.name == obj.name && item.lilun == obj.lilun && item.jineng == obj.jineng);
			})
			this.rander();
		},
		edit(old,data){
			this.data = this.data.map(function(item){
				if((item.name == old.name && item.lilun == old.lilun && item.jineng == old.jineng)){
					return data;
				}
				return item;
			})
			this.rander();
		},
		//渲染
		rander(){
			this.list.innerHTML = this.data.map(function(item){
				return `
					<tr>
						<td>${item.name}</td>
						<td>${item.lilun}</td>
						<td>${item.jineng}</td>
						<td>
							<input type="button" class="edit" value="编辑" />
							<input type="button" class="del" value="删除" />
						</td>
					</tr>
				`;
			}).join("")
		},
		//绑定事件
		bindEvent(){
			var that = this;
			this.list.addEventListener("click",function(e){
				if(e.target.classList.contains("del")){
					//调用回调函数
					that.delAction(e.target);
				}

				if(e.target.classList.contains("edit")){
					//调用回调函数
					that.editAction({
						name:e.target.parentNode.parentNode.children[0].innerText,
						lilun:e.target.parentNode.parentNode.children[1].innerText,
						jineng:e.target.parentNode.parentNode.children[2].innerText,
					});
				}
			})
		}
	}


	return List;
})
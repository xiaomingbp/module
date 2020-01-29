define(function(W){
	function Info(obj){
		Object.assign(this,obj)
		this.init();
	}
	Info.prototype = {
		constructor:Info,
		init(){
			this.rander();
			this.bindEvent();
		},
		//渲染
		rander(){
			this.list.innerHTML = this.data.map(function(item,index){
				return `
					<tr>
						<td>${index + 1}</td>
						<td>${item.username}</td>
						<td>${item.lilun}</td>
						<td>${item.jineng}</td>
						<td>
							<input type="button" value="编辑" class="edit">
							<input type="button" value="删除" class="del">
						</td>
					</tr>
				`
			}).join("");
		},
		//添加
		add(data){
			this.data.push(data);
			this.rander();
		},
		//编辑
		edit(data){
			//修改数组里对应下标的信息修改在重新渲染
			this.data[data.id - 1] = {
				username:data.username,
				lilun:data.lilun,
				jineng:data.jineng
			}
			this.rander();
		},
		bindEvent(){
			var that = this;

			this.list.addEventListener("click",function(e){
				//编辑按钮的点击事件
				if(e.target.classList.contains("edit")){
					//获取tr
					var targetParent = e.target.parentNode.parentNode.children;

					//构造函数传递进来的回调函数
					that.update({
						id:targetParent[0].innerHTML,
						username:targetParent[1].innerHTML,
						lilun:targetParent[2].innerHTML,
						jineng:targetParent[3].innerHTML
					},function(data){
						that.edit(data);
					})
				}
				//删除按钮的点击事件
				if(e.target.classList.contains("del")){
					var index = e.target.parentNode.parentNode.children[0].innerHTML;
					that.data.splice(index-1,1);
					that.rander();
				}
			});
		}
	}
	return Info;
})
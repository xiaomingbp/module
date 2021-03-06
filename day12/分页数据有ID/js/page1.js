define(function(){
	function Page(obj){
		//默认值
		var defaults = {
			index:1,
			size:20,
			aData:null
		}

		Object.assign(this,defaults,obj);		
		this.init();
	}
	Page.prototype = {
		constructor:Page,
		init(){
			this.aData = this.data.slice();
			this.rander();
			this.bindEvent();
		},
		//渲染
		rander(data){
			this.randerData();
			this.randerPage();
		},
		//添加
		add(data){
			this.data.unshift(data);
			this.aData = this.data.slice();
			this.rander();
		},
		edit(id,data){
			var index = -1;
			for(var i=0;i<this.data.length;i++){
				if(this.data[i].id == id){
					index = i;
					break;
				}
			}
			this.data.splice(index,1,data);	
			this.aData = this.data.slice();
			this.rander();
		},
		del(id){
			var index = -1;
			for(var i=0;i<this.data.length;i++){
				if(this.data[i].id == id){
					index = i;
					break;
				}
			}
			this.data.splice(index,1);	
			this.aData = this.data.slice();
			this.rander();
		},
		sort(attr,bl){
			var key = -1;
			if(bl){
				key = 1;
			}
			this.aData.sort(function(a,b){
				if(a[attr] < b[attr]){
					return key;
				}
				if(a[attr] > b[attr]){
					return -key;
				}
				return 0;
			})
			this.index = 1;
			this.rander();
		},
		filter(text){
			this.index = 1;
			this.aData = this.data.filter(function(item){
				return item.name.includes(text) || item.lilun.toString().includes(text) || item.jineng.toString().includes(text)
			})
			this.rander();
		},
		//渲染数据
		randerData(){
			//截取一页数据
			var start = (this.index-1)*this.size;
			var end =  this.index*this.size;
			var data = this.aData.slice(start,end);
			this.list.innerHTML = data.map(function(item){
				return `
					<tr>
						<td>${item.name}</td>
						<td>${item.lilun}</td>
						<td>${item.jineng}</td>
						<td>
							<input type="button" data-id="${item.id}" class="edit" value="编辑">
							<input type="button" data-id="${item.id}" class="del" value="删除">
						</td>
					</tr>
				`
			}).join("");
		},
		//渲染页码
		randerPage(){
			//计算总页数
			var count = Math.ceil(this.aData.length/this.size);
			var html = `<span class="prevbtn">上一页</span>`;
			for(var i=1;i<=count;i++){
				html += `<span class="ma${this.index == i?" active":""}">${i}</span>`
			}
			html += `<span class="nextbtn">下一页</span>`;
			this.page.innerHTML = html;				
		},
		bindEvent(){
			var that = this;

			this.list.addEventListener("click",function(e){
				if(e.target.classList.contains("edit")){
					that.editAction && that.editAction(e.target.getAttribute("data-id"));
				}
				if(e.target.classList.contains("del")){
					that.delAction && that.delAction(e.target.getAttribute("data-id"));
				}
			});

			//翻页
			this.page.addEventListener("click",function(e){
				if(e.target.classList.contains("ma")){
					that.index = e.target.innerHTML*1;
					that.rander();
				}
				if(e.target.classList.contains("prevbtn")){
					that.index--;
					if(that.index < 1){
						that.index = 1;
					}					
					that.rander();
				}
				if(e.target.classList.contains("nextbtn")){
					that.index++;
					if(that.index > that.aData.length - 1){
						that.index = that.aData.length - 1
					}
					that.rander();
				}
			});
		}
	}
	return Page;
})
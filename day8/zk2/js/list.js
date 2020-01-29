define(function(){
	function List(obj){
		this.data = obj.data;
		this.list = document.querySelector(obj.list);
		this.init();
	}
	List.prototype = {
		constructor:List,
		init(){
			this.rander();
			this.bindEvent();
		},
		rander(){
			this.list.innerHTML = this.data.map(function(item){
				return `
					<div class="item">
						<img src="images/1.jpg" data-title="${item.title}" data-url="${item.url}">
					</div>
				`
			}).join("") + `<input type="button" value="添加" class="add" />`
		},
		alert(data){
			var data = data || {}
			var that = this;
			var div = document.createElement("div");
			div.style.cssText = `
				width:100%;
				height:100%;
				position:fixed;
				top:0;
				left:0;
				background-color:rgba(0,0,0,0.5);
			`;
			div.innerHTML = `
				<div style="width:300px;height:200px;position:absolute;left:50%;top:50%;
				margin-left:-150px;margin-top:-100px;background-color:#fff;">
					<div><input type="text" class="title" value="${data.title||""}" /></div>
					<div><input type="text" class="url" value="${data.url||""}" /></div>
					<div>
						<input type="button" class="del" value="删除" />
						<input type="button" class="quit" value="取消" />
						<input type="button" class="finish" disabled="true" value="完成" />
					</div>
				</div>
			`
			div.addEventListener("click",function(ev){
				if(ev.target.classList.contains("del")){
					that.data = that.data.filter(function(item){
						return item.title != div.querySelector(".title").value && item.url != div.querySelector(".url").value
					})
					that.rander();
					div.remove();
				}
				if(ev.target.classList.contains("quit")){
					div.remove();
				}
				if(ev.target.classList.contains("finish")){
					var index = -1;
					that.data.forEach(function(item,i){
						if(item.title == data.title && item.url == data.url){
							index = i
						}
					})
					var arritem = {
						title:div.querySelector(".title").value,
						url:div.querySelector(".url").value
					}
					if(index != -1){
						that.data[index] = arritem
					}else{
						that.data.push(arritem);
					}
					
					that.rander();
					div.remove();
				}
			})

			document.body.appendChild(div);

			if(div.querySelector(".title").value.length > 0 && div.querySelector(".url").value.length > 0){
				div.querySelector(".finish").disabled = false;
			}else{
				div.querySelector(".finish").disabled = true;
			}

			div.querySelector(".title").addEventListener("input",function(){
				if(div.querySelector(".title").value.length > 0 && div.querySelector(".url").value.length > 0){
					div.querySelector(".finish").disabled = false;
				}else{
					div.querySelector(".finish").disabled = true;
				}
			})

			div.querySelector(".url").addEventListener("input",function(){
				if(div.querySelector(".title").value.length > 0 && div.querySelector(".url").value.length > 0){
					div.querySelector(".finish").disabled = false;
				}else{
					div.querySelector(".finish").disabled = true;
				}
			})
		},
		bindEvent(){
			var that = this;
			this.list.addEventListener("click",function(e){
				if(e.target.tagName === "IMG"){
					var data = {
						title:e.target.getAttribute("data-title"),
						url:e.target.getAttribute("data-url"),
					}
					that.alert(data);
				}


				if(e.target.classList.contains("add")){
					that.alert();
				}
			})
		}
				
	}

	
	return List

})
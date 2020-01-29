define(function(){
	function Page(obj){
		var defaults = {
			pn:3, // 前面3个后面3个
			count:20, // 页码数
			index:1 // 当前页码
		}
		Object.assign(this,defaults,obj);
		this.init();
	}
	Page.prototype = {
		constructor:Page,
		init(){
			this.rander();
			this.bindEvent();
		},
		update(){
			this.rander();
			this.action(this.index);
		},
		rander(){

			var start = 1;
			var end = this.count;
			
			if(this.count > this.pn*2+1){
				start = this.index - this.pn;
				end = this.index + this.pn;
				if(this.index - this.pn <= 1){
					start = 1;
					end = this.pn*2+1;
				}
				if(this.index + this.pn >= this.count){
					start = this.count - this.pn*2+1;
					end = this.count;
				}
			}

			var pagestr =  `
				<span class="home">首页</span>
				<span class="prev">上一页</span>
			`;
			for(var i=start;i<=end;i++){
				pagestr +=  `
					<span class="ma" style="${i==this.index?"background-color:red":""}">${i}</span>
				`;
			}
			pagestr +=  `
				<span class="next">下一页</span>
				<span class="last">尾页</span>				
			`;
			this.page.innerHTML = pagestr;
		},
		bindEvent(){
			var that = this;
			this.page.addEventListener("click",function(e){
				if(e.target.classList.contains("home")){
					that.index = 1;
					that.update();
				}
				if(e.target.classList.contains("prev")){
					that.index--;
					if(that.index < 1){
						that.index = 1;
					}
					that.update();
				}
				if(e.target.classList.contains("ma")){
					that.index = e.target.innerHTML*1;
					that.update();
				}
				if(e.target.classList.contains("next")){
					that.index++;
					if(that.index > that.count){
						that.index = that.count;
					}
					that.update();
				}
				if(e.target.classList.contains("last")){
					that.index = that.count;
					that.update();
				}
			});
		}
	}
	return Page;
})
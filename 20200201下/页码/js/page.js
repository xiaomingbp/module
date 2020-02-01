define(function(){
	/*
		参数：
			page渲染页码的盒子
			action 点击页码时返回页码数的回调函数
			index 当前页码    1
			count 总页数      5
			pn 当前页码的前后页码个数   3
		方法：
			init初始化
			rander渲染页码
			updete更新渲染
			bindEvent绑定事件
	 */

	 function Page(obj){
	 	var defaults = {
	 		index:200,
	 		count:200,
	 		pn:3
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
		rander(){
			var start = 1;
			var end = this.count;

			if(this.count > this.pn*2+1){    // 当前页码的前面有pn个页码后面有pn页码 + 当前页码
				start = this.index - this.pn;
				end = this.index + this.pn;


				if(start < 1){
					start = 1;
					end = 7
				}
				if(start > this.count - (this.pn*2+1)){
					start = this.count - this.pn*2;
					end = this.count;
				}
			}

			// console.log(start,end);
			// debugger;

			this.page.innerHTML = `<span class="home">首页</span>
			<span class="prev">上一页</span>`;

			for(var i=start;i<=end;i++){
				this.page.innerHTML += `<span class="item${i == this.index?" active":""}">${i}</span>`;
			}
			
			this.page.innerHTML += `<span class="next">下一页</span>
			<span class="last">尾页</span>`;
		},
		updete(){

		},
		bindEvent(){
			var that = this;
			this.page.addEventListener("click",function(e){
				//首页
				if(e.target.classList.contains("home")){
					that.index = 1;					
				}
				//上一页
				if(e.target.classList.contains("prev")){
					that.index--;
					if(that.index<1){
						that.index = 1;
					}					
				}

				//页码
				if(e.target.classList.contains("item")){
					that.index = e.target.innerText*1;					
				}

				//下一页
				if(e.target.classList.contains("next")){
					that.index++;
					if(that.index>that.count){
						that.index = that.count;
					}					
				}

				//尾页
				if(e.target.classList.contains("last")){
					that.index = that.count;					
				}

				that.rander();
				that.action(that.index);

			});
		}
	 }

	return Page;
})
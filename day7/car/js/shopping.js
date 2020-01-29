define(function(){

	function Shopping(obj){
		Object.assign(this,obj);
		this.init();
	}

	Shopping.prototype = {
		constructor:Shopping,
		init(){
			this.render();
			this.bindEvent();
		},
		render(){
			this.goodsList.innerHTML = this.data.map(function(item){
				return `
					<div class="item" desc="${item.desc}">
						<img src="imgs/1.jpg" alt="">
						<div class="title">${item.title}</div>
						<div class="price">${item.price}</div>
						<div>
							<input type="button" 
								data-title="${item.title}"
								data-price="${item.price}"
								data-desc="${item.desc}"
								data-src="${item.src}"
							 	class="addcar" value="添加购物车">
							<input type="button" class="shoucang" value="收藏">
						</div>
					</div>
				`
			}).join("")
		},
		bindEvent(){
			var that = this;
			this.goodsList.addEventListener("click",function(e){
				if(e.target.classList.contains("addcar")){
							
					that.getAddGoods && that.getAddGoods({
						title:e.target.getAttribute("data-title"),
						price:e.target.getAttribute("data-price"),
						desc:e.target.getAttribute("data-desc"),
						src:e.target.getAttribute("data-src")
					})
				}
				if(e.target.classList.contains("shoucang")){
					alert("收藏成功")
				}
			})
		}
	}

	return Shopping;

})
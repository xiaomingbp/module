define(function(){
	function Tab(obj){
		//按钮组 btns
		//内容组 cons
		Object.assign(this,obj);
		this.bindEvent();
	}

	Tab.prototype = {
		constructor:Tab,
		bindEvent(){
			var that = this;
			this.btns.forEach(function(item,index){
				item.addEventListener("click",function(){

					that.btns.forEach(function(el,i){
						that.btns[i].classList.remove("active")
						that.cons[i].classList.remove("active")
					})

					that.btns[index].classList.add("active")
					that.cons[index].classList.add("active")
				});
			})
		}
	}

	return Tab;
})
define(function(){
	function Tab(obj){
		Object.assign(this,obj);
		this.init();
	}
	Tab.prototype = {
		constructor:Tab,
		init(){
			this.bindEvent();
		},
		bindEvent(){
			var that = this;
			that.btns.forEach(function(item,index){

				item.onclick = function(){
					that.btns.forEach(function(el,i){
						that.btns[i].classList.remove("active")
						that.cons[i].classList.remove("active")
					});

					that.btns[index].classList.add("active")
					that.cons[index].classList.add("active")
				}
				
			})
		}
	}
	return Tab;
})
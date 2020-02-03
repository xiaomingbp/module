define(function(){
	function Tab(obj){
		var defaults = {

		}
		Object.assign(this,defaults,obj);
		this.init();
	}
	Tab.prototype = {
		constructor:Tab,
		init(){
			this.bindEvent();
		},		
		bindEvent(){
			var spans = [...this.btns.children];
			var divs = [...this.cons.children];

			spans.forEach(function(item,index){
				item.addEventListener("click",function(){
					spans.forEach(function(el,i){
						spans[i].classList.remove("active")
						divs[i].classList.remove("active")
					})

					spans[index].classList.add("active")
					divs[index].classList.add("active")
				})
			})


		}
	}

	return Tab;
})
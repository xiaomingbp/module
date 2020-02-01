define(function(){
	/*
		data
		btns
		cons
	 */
	function Tab(obj){
		var defaults = {

		}
		Object.assign(this,defaults,obj);
		this.init();
	}
	Tab.prototype = {
		constructor:Tab,
		init(){
			this.randerTit();
			this.randerCon();
			this.bindEvent();
		},
		randerTit(){
			this.btns.innerHTML = this.data.map(function(item){
				return `
					<span>${item.title}</span>
				`
			}).join("");
		},
		randerCon(){
			this.cons.innerHTML = this.data.map(function(item){
				return `
					<div>${item.content}</div>
				`
			}).join("");
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
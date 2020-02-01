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
			this.btns.innerHTML = this.data.map(function(item,index){
				return `
					<span data-index="${index}">${item.title}</span>
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
			var that = this;
			var spans = [...this.btns.children];
			var divs = [...that.cons.children];

			this.btns.addEventListener("click",function(e){
				if(e.target.tagName === "SPAN"){
					var index = e.target.getAttribute("data-index");

					spans.forEach(function(item,i){
						spans[i].classList.remove("active")
						divs[i].classList.remove("active")
					})

					spans[index].classList.add("active")
					divs[index].classList.add("active")
				}
			})
		}
	}

	return Tab;
})
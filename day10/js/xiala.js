define(["getDOM"],function(D){

	function Xiala(obj){
		Object.assign(this,obj);
		this.init();
	}
	Xiala.prototype = {
		constructor:Xiala,
		init(){
			this.rander();
			this.bindEvent();
		},
		rander(){
			this.list.innerHTML = this.data.map(function(item){
				var options = item.children.map(function(el){
					return `
						<li><input type="checkbox">${el}</li>
					`
				}).join("");
				return `
					<li>
						<div>${item.title}</div>
						<ul>
							${options}
						</ul>
					</li>
				`
			}).join("")
		},
		bindEvent(){
			var that = this;
			var inputs = D("input[type='checkbox']");
			inputs.forEach(function(item){
				item.addEventListener("change",function(){
					var lis = [...document.querySelectorAll("input[type='checkbox']:checked")];
					that.box.value = lis.map(function(el){
						return el.parentNode.innerText;
					}).join();
				})
			})
		}
	}


	return Xiala;
})
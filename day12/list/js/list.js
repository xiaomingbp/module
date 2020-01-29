define(function(){
	function List(obj){
		Object.assign(this,obj);
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
				return `<li>${item}</li>`
			}).join("")
		},
		add(data){
			this.data.push(data);
			this.rander();
		},
		del(data){			
			this.data = this.data.filter(function(item){
				return item != data;
			});
			this.rander();
		},
		bindEvent(){
			var that = this;
			this.list.addEventListener("click",function(e){
				if(e.target.tagName == "LI"){
					that.delAction && that.delAction(e.target)
				}
			})
		}
	}


	return List;
})
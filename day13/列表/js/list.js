define(function(){
	function List(obj){
		var defaults = {
			index:1,
			size:5
		}
		Object.assign(this,defaults,obj);
		this.count = 0;
		this.init();
	}
	List.prototype = {
		constructor:List,
		init(){
			this.count = Math.floor(this.data.length/this.size);
			this.rander();
		},
		update(index){
			this.index = index;
			console.log(this.index);
			this.rander();
		},
		rander(){
			var that = this;
			var start = (this.index - 1)*this.size;
			var end = this.index * this.size;
			var data = this.data.slice(start,end);
			this.list.innerHTML = data.map(function(item,index){
				return that.template(item,index);
			}).join("");
		},
	}



	return List;
})
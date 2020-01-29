define(function(){
	function Sanjiliandong(obj){
		Object.assign(this,obj);
		this.init();
	}
	Sanjiliandong.prototype = {
		constructor:Sanjiliandong,
		//初始化
		init(){
			this.render(this.sheng,this.data);
			this.bindEvent();
		},
		//渲染
		render(el,arr){
			el.innerHTML = `<option>请选择</option>`;
			el.innerHTML += arr.map(function(item){
				return `<option>${item.name}</option>`
			}).join("");
		},
		bindEvent(){
			var that = this;
			var shengIndex = 0;
			var shiIndex = 0;
			var shiData = []
			var quData = []
			this.sheng.addEventListener("change",function(){
				shengIndex = that.sheng.selectedIndex - 1
				that.shi.innerHTML = "<option>请选择</option>";
				that.qu.innerHTML = "<option>请选择</option>";
				if(shengIndex < 0){return;}

				shiData = that.data[shengIndex].children
				that.render(that.shi,shiData);
			});

			this.shi.addEventListener("change",function(){
				shiIndex = that.shi.selectedIndex - 1;

				that.qu.innerHTML = "<option>请选择</option>";
				if(shiIndex < 0){return;}

				quData = that.data[shengIndex].children[shiIndex].children;
				that.render(that.qu,quData);
			});

		}
	}
	return Sanjiliandong;
})
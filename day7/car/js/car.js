define(function(){
	function Car(obj){
		Object.assign(this,obj);
		this.init();
	}
	Car.prototype = {
		constructor:Car,
		init(){
			this.bindEvent();
		},
		tongji(){
			var allprice = 0;
			var allnum = 0;
			this.car.querySelectorAll(".glist input[type='checkbox']:checked").forEach(function(item){
				var oneprice = item.parentNode.parentNode.children[3].innerHTML
				var num = item.parentNode.parentNode.querySelector(".num").value
				allprice += oneprice*num;
				allnum += num*1;
			})

			this.car.querySelector(".allprice").innerHTML = "总价："+allprice + "元";
			this.car.querySelector(".allnum").innerHTML = "总件："+allnum + "个";
		},
		bindEvent(){
			var that = this;
			this.car.addEventListener("click",function(e){
				if(e.target.classList.contains("allcheck")){
					that.car.querySelectorAll("input[type='checkbox']").forEach(function(item){
						item.checked = e.target.checked;
					})

				}

				if(e.target.classList.contains("jia")){
					e.target.previousElementSibling.value++;
					
				}

				if(e.target.classList.contains("jian")){
					e.target.nextElementSibling.value--;
					
				}

				if(e.target.classList.contains("del")){
					e.target.parentNode.parentNode.remove();
					
				}

				that.tongji();
			})
		}
	}

	return Car;
})
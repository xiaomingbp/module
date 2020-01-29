define(function(){
	function Banner(obj){
		Object.assign(this,obj)
		this.index = 0;
		this.t = null;
		this.init();
	}
	Banner.prototype = {
		constructor:Banner,
		init(){
			this.run();
			this.bindEvent();
		},
		//根据index的值显示对应的图片
		show(){
			var that = this;
			var imgs = [...this.imgs]
			imgs.forEach(function(item,i){
				that.imgs[i].classList.remove("active")
				that.focuss[i].classList.remove("active")
			})
			this.imgs[this.index].classList.add("active")
			this.focuss[this.index].classList.add("active")
		},
		//index++ 在显示对应的图片
		next(){
			this.index++;
			if(this.index > this.imgs.length - 1){
				this.index = 0;
			}
			this.show();
		},
		//index-- 在显示对应的图片
		prev(){
			this.index--;
			if(this.index < 0){
				this.index = this.imgs.length - 1;
			}
			this.show();
		},
		// 开始轮播
		run(){
			var that = this;
			this.t = setInterval(function(){
				that.next();
			},this.timer)
		},
		// 绑定事件
		bindEvent(){
			var that = this;
			// 鼠标滑过轮播图时 停止轮播
			this.box.addEventListener("mouseover",function(){
				clearInterval(that.t);
			});
			// 鼠标移出轮播图时 开始轮播
			this.box.addEventListener("mouseout",function(){
				that.run();
			});


			//下一个按钮绑定点击事件
			this.nextbtn.addEventListener("click",function(){
				that.next();
			})

			//上一个按钮绑定点击事件
			this.prevbtn.addEventListener("click",function(){
				that.prev();
			})

			var focuss = [...this.focuss];
			focuss.forEach(function(item,i){
				item.addEventListener("mouseover",function(){
					that.index = i;
					that.show();
				})
			})
		}
	}

	return Banner
})
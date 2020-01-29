define(["velocity.min"],function(V){
	function Banner(obj){
		Object.assign(this,obj)
		//默认图片下标
		this.index = 1;
		//计时器的返回值
		this.t = null;
		//初始化
		this.init();
	}
	Banner.prototype = {
		constructor:Banner,
		init(){
			//显示默认图片
			this.show();
			if(this.visible){
				this.focuss[0].parentNode.classList.add("active")
			}else{
				this.focuss[0].parentNode.classList.remove("active")
			}
			this.bindEvent()
			//启动轮播
			this.run();
		},
		show(){
			var that = this;
			V(
				this.imgs,
				{
					left:-this.index * 1000 + "px"
				},
				{
					duration:100,
					complete(){
						//下标超出时从头开始
						if(that.index > 3){
							that.index = 1;
							that.imgs.style.left = "-1000px";
							
						}
						//下标小于1时从最后一张倒回来
						if(that.index < 1){
							that.index = 3;
							that.imgs.style.left = "-3000px";
						}

						that.checkFocus();
					}
				}
			)
		},
		//分页器就是焦点
		checkFocus(){
			//排他
			this.focuss.forEach(function(item){
				item.classList.remove("active")
			})
			this.focuss[this.index-1].classList.add("active");
		},
		run(){
			var that = this;
			this.t = setInterval(function(){
				that.next();
			},1000);
		},
		next(){
			this.index++;
			this.show();
		},
		prev(){
			this.index--;
			this.show();
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
				clearInterval(that.t);
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
					that.index = i+1;
					that.show();
				})
			})
		}
	}

	return Banner
})
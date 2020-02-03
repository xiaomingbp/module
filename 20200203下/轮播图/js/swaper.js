define(function(){

	function Swaper(obj){
		/*		
		 	obj.box盒子
			obj.imgs所有图片
			obj.prevbtn上一个按钮
			obj.nextbtn下一个按钮
			obj.focusss所有焦点按钮
		 */
		var defaults = {
			index:1, // 当前现实图片的下标
			timer:2000, // 轮播的间隔时间
			t:null
		}
		Object.assign(this,defaults,obj);
		this.init();
	}
	Swaper.prototype = {
		constructor:Swaper,
		init(){
			this.run();
			this.bindEvent();
		},
		show(){
			var that = this;
			//排他
			this.imgs.forEach(function(el,i){
				that.imgs[i].classList.remove("active");
				that.focusss[i].classList.remove("active");
			})
			//选中
			console.log(this.imgs,this.index);
			debugger;
			this.imgs[this.index].classList.add("active");
			this.focusss[this.index].classList.add("active");
		},
		//下一张
		next(){
			this.index++;
			if(this.index > this.imgs.length - 1){
				this.index = 0;
			}
			//显示跟index对应的图片的操作
			this.show();
		},
		//上一张
		prev(){
			this.index--;
			if(this.index < 0){
				this.index = this.imgs.length - 1;
			}
			//显示跟index对应的图片的操作
			this.show();
		},
		//运行
		run(){
			var that = this;
			this.t = setInterval(function(){
				//下一张操作
				that.next();
			},this.timer);
		},
		bindEvent(){
			var that = this;
			this.box.addEventListener("mouseover",function(){
				//停止轮播操作
				clearInterval(that.t);
			});
			this.box.addEventListener("mouseout",function(){
				//重新运行轮播
				that.run();
			});
			this.prevbtn.addEventListener("click",function(){
				//上一张操作
				that.prev();
			});
			this.nextbtn.addEventListener("click",function(){
				//下一张操作
				that.next();
			})

			this.focusss.forEach(function(item,index){
				item.addEventListener("mouseover",function(){
					that.index = index;
					that.show();
				})
			})
		}
	}


	return Swaper
})
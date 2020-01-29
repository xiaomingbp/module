define(function(){
	function List(obj){
		Object.assign(this,obj);
		this.answerOptions = ["A","B","C","D"];
		this.init();
	}
	List.prototype = {
		constructor:List,
		init(){
			this.rander();
			this.bindEvent();
		},
		//渲染
		rander(){
			this.subjects();
			this.answers();
		},
		//渲染题目
		subjects(){
			this.list.innerHTML = this.data.map(function(item,index){
				var options = item.options.map(function(el,i){
					return `<li data-index="${i}">aaaaaaaaaaaaaa</li>`
				}).join("");
				return `
					<div class="item">
						<h2>${index+1}、${item.title}</h2>
						<ol key="${index}">
							${options}
						</ol>
					</div>
				`
			}).join("");
		},
		//渲染答题卡
		answers(){
			this.answer.innerHTML = this.data.map(function(item,index){
				return `
					<div class="item" data-index="${index}">${index+1}</div>
				`
			}).join("");
		},
		//排序
		sort(){

		},
		//高亮选项卡
		changeAnswer(index,answers){
			if(answers){
				this.answer.children[index].setAttribute("data-answer",answers);
			}else{
				this.answer.children[index].removeAttribute("data-answer");
			}			
		},
		//绑定时间
		bindEvent(){
			var that = this;
			//点击选项
			this.list.addEventListener("click",function(e){				
				if(e.target.tagName === "LI"){
					e.target.classList.toggle("active");
					
					var subject = e.target.parentNode;
					//获取题目下标
					var index = subject.getAttribute("key")
					//获取选择项
					var answer = [...subject.querySelectorAll(".active")].map(function(item){
						return that.answerOptions[item.getAttribute("data-index")]
					}).join("")
					//高亮选项卡
					that.changeAnswer(index,answer)
					
				}
			});

			//答题卡选项
			this.answer.addEventListener("click",function(e){
				//点击选项卡项跳到对应的题目
				if(e.target.classList.contains("item")){
					var index = e.target.getAttribute("data-index");
					//获取对应题目的偏移量
					var subjectTop = that.list.children[index].offsetTop;
					//滚动条设置偏移量
					document.body.scrollTop = document.documentElement.scrollTop = subjectTop
				}
			})

			//提交
			this.submit.addEventListener("click",function(e){
				//获取所有的选项卡的项
				var answer = [...that.answer.children];
				//遍历统计答案
				var arr = answer.filter(function(item,index){
					if(item.getAttribute("data-answer") === that.data[index].answer){
						return true;
					}else{
						item.removeAttribute("data-answer")
						return false;
					}
				})
				
				alert(arr.length);
			})
		}
	}
	return List;
})
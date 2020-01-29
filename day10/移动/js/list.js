define(function(){
	function List(obj){
		Object.assign(this,obj);
		this.answerOptions = ["A","B","C","D"]
		this.init();
	}

	List.prototype = {
		constructor:List,
		init(){
			this.rander();
			this.bindEvent();
		},
		rander(){
			this.subjectRander();
			this.answersRander();
		},
		subjectRander(){
			this.box.innerHTML = this.data.map(function(item,index){
				var options = item.options.map(function(el,i){
					return `<li index="${i}">${el}</li>`
				}).join("");

				return `
					<div class="item">
						<h2>${index+1}、${item.title}</h2>
						<ol type="A" index="${index}">
							${options}
						</ol>
					</div>
				`
			}).join("")
		},
		answersRander(){
			this.answers.innerHTML = this.data.map(function(item,index){
				return `
					<div class="item" index="${index}">${index+1}</div>
				`
			}).join("")
		},
		doSubmit(){
			var that = this;
			var answers = [...that.answers.children];
			var newarr = answers.filter(function(item){
				var index = item.getAttribute("index");
				return that.data[index].answer === item.getAttribute("data-answer")					
			})
			alert(newarr.length)			
		},
		bindEvent(){
			var that = this;
			this.box.addEventListener("click",function(e){
				if(e.target.tagName === "LI"){
					e.target.classList.toggle("active")

					var actives = [...e.target.parentNode.querySelectorAll(".active")]
					
					var answerstr = actives.map(function(item){						
						return that.answerOptions[item.getAttribute("index")]
					}).join("")

					var index = e.target.parentNode.getAttribute("index");
					
					if(answerstr){
						that.answers.children[index].classList.add("active")
						that.answers.children[index].setAttribute("data-answer",answerstr)
					}else{
						that.answers.children[index].classList.remove("active")
						that.answers.children[index].removeAttribute("data-answer")
					}
				}
			})

			//答题卡点击事件
			this.answers.addEventListener("click",function(e){
				if(e.target.classList.contains("item")){
					var subjectTop = that.box.children[e.target.getAttribute("index")].offsetTop;
					document.body.scrollTop = document.documentElement.scrollTop = subjectTop;
				}
			})


			//提交
			this.submit.addEventListener("click",function(){
				that.doSubmit();
			})

		}
	}
	return List;
})
define(function(){
	function List(obj){
		Object.assign(this,obj);
		this.answerOptions = ["A","B","C","D"]
		this.typeOptions = {
			danxuan:"单选题",
			duoxuan:"多选题",
			panduan:"判断题",
			tiankong:"填空题"
		}
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
			var that = this;
			this.box.innerHTML = this.data.map(function(item,index){
				var options = ""
				switch(item.type){
					case "danxuan":
						options = `<ol type="A" category="${item.type}" index="${index}">` + item.options.map(function(el,i){
							return `<li index="${i}">${el}</li>`
						}).join("") + `</ol>`;
						break;
					case "duoxuan":
						options = `<ol type="A" category="${item.type}" index="${index}">` + item.options.map(function(el,i){
							return `<li index="${i}">${el}</li>`
						}).join("") + `</ol>`;
						break;
					case "panduan":
						options = `<ol type="A" category="${item.type}" index="${index}">
							<li index="0">对</li>
							<li index="1">错</li>
						</ol>`;
						break;
					case "tiankong":
						options = `<div category="${item.type}" index="${index}">
							<input type="text" />
						</div>`;
						break;
				}

				return `
					<div class="item">
						<h2>[${that.typeOptions[item.type]}]${index+1}、${item.title}</h2>
						${options}						
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
		changAnswer(el){
			var that = this;
			var actives = [...el.parentNode.querySelectorAll(".active")]
			var answerstr = actives.map(function(item){						
				return that.answerOptions[item.getAttribute("index")]
			}).join("")
			var index = el.parentNode.getAttribute("index");					
			if(answerstr){
				that.answers.children[index].classList.add("active")
				that.answers.children[index].setAttribute("data-answer",answerstr)
			}else{
				that.answers.children[index].classList.remove("active")
				that.answers.children[index].removeAttribute("data-answer")
			}
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
					var type = e.target.parentNode.getAttribute("category");
					console.log(type)
					switch(type){
						case "danxuan":
							[...e.target.parentNode.children].forEach(function(item){
								item.classList.remove("active")
							})
							e.target.classList.add("active")
							break;
						case "duoxuan":
							e.target.classList.toggle("active")
							break;
						case "panduan":
							[...e.target.parentNode.children].forEach(function(item){
								item.classList.remove("active")
							})
							e.target.classList.add("active")
							break;
					}
					that.changAnswer(e.target)
				}
			})

			this.box.querySelectorAll("input").forEach(function(item){
				item.addEventListener("blur",function(){
					var index = item.parentNode.getAttribute("index");
					if(item.value){
						that.answers.children[index].setAttribute("data-answer",item.value);
						that.answers.children[index].classList.add("active");
					}else{
						that.answers.children[index].removeAttribute("data-answer");
						that.answers.children[index].classList.add("active");
					}					
				})
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




			// document.addEventListener("menu",function(e){
			// 	console.log(e)
			// })

		}
	}
	return List;
})
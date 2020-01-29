define(function(){

	function Form(obj){

		var data = obj.data || {};
		//排版
		var div = document.createElement("div");
		div.style.cssText = `
			width:400px;
			height:300px;
			background-color:#fff;
			box-shadow:0 0 20px #000;
			position:fixed;
			top:200px;
			left:50%;
			margin-left:-200px;

		`
		div.innerHTML = `
			<div>姓名: <input type="text" class="name" value="${data.name || ""}" /></div>
			<div>理论成绩: <input type="text" class="lilun" value="${data.lilun || ""}" /></div>
			<div>技能成绩: <input type="text" class="jineng" value="${data.jineng || ""}" /></div>
			<div>
				<input type="button" class="confirm" value="确认" />
				<input type="button" class="cancel" value="取消"  />
			</div>
		`
		//绑定事件
		div.addEventListener("click",function(e){
			//点击确认按钮
			if(e.target.classList.contains("confirm")){
				obj.returnValue && obj.returnValue({
					name:div.querySelector(".name").value,
					lilun:div.querySelector(".lilun").value,
					jineng:div.querySelector(".jineng").value
				})
				div.remove();
			}
			//点击取消按钮
			if(e.target.classList.contains("cancel")){
				obj.returnValue && obj.returnValue(false)
				div.remove();
			}
		})
		document.body.appendChild(div);
	}

	return Form;

})
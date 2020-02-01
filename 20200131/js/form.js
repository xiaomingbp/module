define(function(){
	function Win(collback){
		var div = document.createElement("div");
		div.style.cssText = `
			width:300px;
			height:300px;
			border:1px solid #aaa;
			background-color:#fff;
			border-radius:3px;
			position:absolute;
			top:50%;
			left:50%;
			margin-top:-150px;
			margin-left:-150px;
		`
		div.innerHTML = `
			<div style="height:40px;line-height:40px;">表单</div>
			<div>
				<div>姓名：<input type="text" class="name" /></div>
				<div>年龄：<input type="text" class="age" /></div>
				<div>性别：<input type="text" class="sex" /></div>
				<div>
					<input type="button" value="确认" class="confirm" />
					<input type="button" value="取消" class="close" />
				</div>
			</div>

		`

		div.addEventListener("click",function(e){
			if(e.target.classList.contains("confirm")){
				//姓名
				var sname = div.querySelector(".name").value;
				//年龄
				var sage = div.querySelector(".age").value;
				//性别
				var ssex = div.querySelector(".sex").value;

				collback({
					name:sname,
					age:sage,
					sex:ssex
				})

				div.remove();
			}

			if(e.target.classList.contains("close")){
				div.remove();
			}

		})

		document.body.appendChild(div);

	}
	return {
		form:Win
	}
})
define(function(){
	function Win(obj){
		var div = document.createElement("div");
		div.style.cssText = `
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background-color:rgba(0,0,0,.5);
		`;
		var data = obj.data || {};
		div.innerHTML = `
			<div style="
				width:500px;height:400px;position:absolute;
				left:50%;top:50%;margin-left:-250px;margin-top:-200px;
				background-color:#fff;">

				<div>姓名：<input type="text" class="username" value="${data.username||""}" /></div>
				<div>理论成绩：<input type="text" class="lilun" value="${data.lilun||""}" /></div>
				<div>技能成绩：<input type="text" class="jineng" value="${data.jineng||""}" /></div>
				<div>
					<input type="button" class="quren" value="确认" />
					<input type="button" class="quxiao" value="取消" />
				</div>
			</div>
		`
		div.addEventListener("click",function(e){
			if(e.target.classList.contains("quren")){				
				obj.returnDate && obj.returnDate({
					id:data.id,
					username:div.querySelector(".username").value,
					lilun:div.querySelector(".lilun").value,
					jineng:div.querySelector(".jineng").value
				});
				div.remove();				
			}
			if(e.target.classList.contains("quxiao")){				
				div.remove();				
			}
		});

		document.body.appendChild(div)
	}


	return {
		form:Win
	}
})
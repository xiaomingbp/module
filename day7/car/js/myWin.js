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

		div.innerHTML = `
			<div style="
				width:500px;height:400px;position:absolute;
				left:50%;top:50%;margin-left:-250px;margin-top:-200px;
				background-color:#fff;">

				<div>标题：<input type="text" class="title" /></div>
				<div>价格：<input type="text" class="price" /></div>
				<div>描述：<textarea cols="30" rows="10" class="desc"></textarea></div>
				<div>
					<input type="button" class="quren" value="确认" />
					<input type="button" class="quxiao" value="取消" />
				</div>
			</div>
		`
		div.addEventListener("click",function(e){
			if(e.target.classList.contains("quren")){				
				obj.returnDate && obj.returnDate({
					title:div.querySelector(".title").value,
					price:div.querySelector(".price").value,
					desc:div.querySelector(".desc").value,
					src:"imgs/1.jpg"
				})
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
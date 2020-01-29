define(function(){
	function Alert(obj){
		var div = document.createElement("div")
		div.style.cssText = `
			width:300px;
			height:150px;
			border:1px solid #aaa;
			border-radius:5px;
			
		`;

		div.innerHTML = `
			<div style="height:100px;line-height:100px;text-align:center;"><b>${obj.title}</b></div>
			<div style="height:50px;line-height:50px;text-align:center;">
				<input type="button" value="${obj.queren || "确认"}" class="success" />
				<input type="button" value="${obj.quxiao || "取消"}" class="close" />
			</div>
		`

		div.addEventListener("click",function(e){
			if(e.target.classList.contains("success")){
				obj.success && obj.success();
				div.remove();
			}
			if(e.target.classList.contains("close")){
				obj.close && obj.close();
				div.remove();
			}

		});

		document.body.appendChild(div);

	}

	return {
		alert:Alert
	}
})
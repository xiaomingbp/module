define(function(){	
	return {
		alert(text){
			var div = document.createElement("div");
			div.style.cssText = `
				position:fixed;
				width:300px;
				height:150px;
				top:200px;
				left:50%;
				margin-left:-150px;
				box-shadow:0 0 5px #000;
			`
			div.innerHTML = `
				<div style="height:80px;margin:20px 20px 0 20px;">${text}</div>
				<div style="text-align:right;">
					<input type="button" value="确认" style="margin-right: 20px;width: 60px;height: 32px;background-color: #b3b3b3;border: 0;color: #fff;border-radius: 2px;" class="confirm" />
				</div>
			`;

			div.addEventListener("click",function(e){
				if(e.target.classList.contains("confirm")){
					div.remove();
				}				
			})
			document.body.appendChild(div);
		},
		prompt(text,defaultValue,fn){
			var div = document.createElement("div");
			div.style.cssText = `
				position:fixed;
				width:300px;
				height:150px;
				top:200px;
				left:50%;
				margin-left:-150px;
				box-shadow:0 0 5px #000;
			`
			div.innerHTML = `
				<div style="height:80px;margin:20px 20px 0 20px;">
					${text}
					<div><input type="text" value="${defaultValue||""}" /></div>
				</div>
				<div style="text-align:right;">
					<input type="button" value="确认" style="margin-right: 20px;width: 60px;height: 32px;background-color: #b3b3b3;border: 0;color: #fff;border-radius: 2px;" class="confirm" />
					<input type="button" value="取消" style="margin-right: 20px;width: 60px;height: 32px;background-color: #b3b3b3;border: 0;color: #fff;border-radius: 2px;" class="cancel" />
				</div>
			`;

			div.addEventListener("click",function(e){
				if(e.target.classList.contains("confirm")){
					fn(div.querySelector("input[type='text']").value)
					div.remove();
				}
				if(e.target.classList.contains("cancel")){
					fn(null);
					div.remove();
				}			
			})
			document.body.appendChild(div);
		},
		confirm(text,fn){
			var div = document.createElement("div");
			div.style.cssText = `
				position:fixed;
				width:300px;
				height:150px;
				top:200px;
				left:50%;
				margin-left:-150px;
				box-shadow:0 0 5px #000;
			`
			div.innerHTML = `
				<div style="height:80px;margin:20px 20px 0 20px;">${text}</div>
				<div style="text-align:right;">
					<input type="button" value="确认" style="margin-right: 20px;width: 60px;height: 32px;background-color: #b3b3b3;border: 0;color: #fff;border-radius: 2px;" class="confirm" />
					<input type="button" value="取消" style="margin-right: 20px;width: 60px;height: 32px;background-color: #b3b3b3;border: 0;color: #fff;border-radius: 2px;" class="cancel" />
				</div>
			`;

			div.addEventListener("click",function(e){
				if(e.target.classList.contains("confirm")){
					fn(true)
					div.remove();
				}
				if(e.target.classList.contains("cancel")){
					fn(false)
					div.remove();
				}				
			})
			document.body.appendChild(div);
		}
	}
})
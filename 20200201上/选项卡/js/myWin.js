// return 结果 ==》 结果的形式返回数据时用return
// 回调函数（参数）==》 提取式的返回数据用回调函数
define(function(){

	function Alert(value){
		/*
		var box = "width:300px;height:200px;position:absolute;left:50%;margin-left:-150px;top:200px;background-color:#fff;"
		var title="height:30px;line-height:30px;border-bottom:1px solid #aaa;";
		var content = "height:100px;line-height:100px;"
		var confirm = "float:right;margin-right:20px;"
		*/
		var div = document.createElement("div");
		var css = {
			box:"border:1px solid #aaa;width:300px;height:200px;position:absolute;left:50%;margin-left:-150px;top:200px;background-color:#fff;",
			title:"height:30px;line-height:30px;border-bottom:1px solid #aaa;",
			content:"height:100px;line-height:100px;",
			confirm:"float:right;margin-right:20px;"
		}
		div.style.cssText = css.box;
		div.innerHTML = `
			<div style="${css.title}">提示</div>
			<div style="${css.content}">${value}</div>
			<div>
				<input style="${css.confirm}" type="button" class="confirm" value="确认" />
			</div>
		`
		div.addEventListener("click",function(e){
			if(e.target.classList.contains("confirm")){
				div.remove();
			}
		})
		document.body.appendChild(div);
	}

	function Prompt(value,defaults,callback){
		var div = document.createElement("div");
		var css = {
			box:"border:1px solid #aaa;width:300px;height:200px;position:absolute;left:50%;margin-left:-150px;top:200px;background-color:#fff;",
			title:"height:30px;line-height:30px;border-bottom:1px solid #aaa;",
			content:"height:100px;line-height:100px;",
			confirm:"",
			close:""
		}
		div.style.cssText = css.box;
		div.innerHTML = `
			<div style="${css.title}">提示</div>
			<div style="${css.content}">${value}
				<input type="text" class="text" value="${defaults}" />
			</div>
			<div>
				<input style="${css.confirm}" type="button" class="confirm" value="确认" />
				<input style="${css.confirm}" type="button" class="close" value="取消" />
			</div>
		`
		div.addEventListener("click",function(e){
			if(e.target.classList.contains("confirm")){
				callback(div.querySelector(".text").value);
				div.remove();
			}
			if(e.target.classList.contains("close")){
				callback(null);
				div.remove();
			}
		})
		document.body.appendChild(div);
	}


	function Comfirm(value,callback){
		var div = document.createElement("div");
		var css = {
			box:"border:1px solid #aaa;width:300px;height:200px;position:absolute;left:50%;margin-left:-150px;top:200px;background-color:#fff;",
			title:"height:30px;line-height:30px;border-bottom:1px solid #aaa;",
			content:"height:100px;line-height:100px;",
			confirm:"",
			close:""
		}
		div.style.cssText = css.box;
		div.innerHTML = `
			<div style="${css.title}">提示</div>
			<div style="${css.content}">${value}</div>
			<div>
				<input style="${css.confirm}" type="button" class="confirm" value="确认" />
				<input style="${css.confirm}" type="button" class="close" value="取消" />
			</div>
		`
		div.addEventListener("click",function(e){
			if(e.target.classList.contains("confirm")){
				callback(true);
				div.remove();
			}
			if(e.target.classList.contains("close")){
				callback(false);
				div.remove();
			}
		})
		document.body.appendChild(div);
	}



	return {
		alert:Alert,
		prompt:Prompt,
		confirm:Comfirm
		// form:
	}
})
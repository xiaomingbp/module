define([],function(){
	var css = {
		zhezhao:"position:fixed;top:0;left:0;width:100%;height:100%;",
		mask:"background-color: #fff;position: absolute;top:50%;left:50%;margin-left:-250px;margin-top:-150px;border-radius: 5px;",
		title:"height:40px;line-height: 40px;text-indent: 20px;border-bottom:1px solid #aaa;",
		content:"height:200px;line-height: 200px;text-align: center;",
		btns:"height:60px;line-height: 60px;text-align: right;"
	}
	function Alert(obj){
		var div = document.createElement("div");
		div.style.cssText = css.zhezhao;
		div.style.backgroundColor = obj.hasMask ? "rgba(0,0,0,.5)":"rgba(0,0,0,0)";
		div.innerHTML = `
			<div style="${css.mask}width:${obj.width}px;height:${obj.height}px;background-color:${obj.skinName};">
				<div style="${css.title}">${obj.title}</div>
				<div style="${css.content}">${obj.content}</div>
				<div style="${css.btns}">
					<input type="button" class="queren" value="${obj.btnText || "确定"}">
					<input type="button" class="quxiao" value="${obj.closeText || "取消"}">			
				</div>
			</div>
		`;
		div.addEventListener("click",function(e){
			if(e.target.classList.contains("queren")){
				obj.handlerSureBtn();
			}
			if(e.target.classList.contains("quxiao")){
				obj.handlerCloseBtn();
				div.remove();
			}
		});
		document.body.appendChild(div);
	}

	return {
		alert:Alert
	}
})
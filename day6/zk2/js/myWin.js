define(["velocity.min"],function(V){

	function Win(obj){
		var div = document.createElement("div");
		div.style.cssText = `
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background-color:rgba(0,0,0,0.5);
			display:none;
		`;
		div.innerHTML = `
			<div style="width:500px;height:400px;border:1px solid #000;position:absolute;left:50%;top:50%;
				margin-top:-200px;margin-left:-250px;background-color:#fff">
				<div>用户名<input type="text" class="username" /></div>
				<div>籍贯<input type="text" class="jiguan" /></div>
				<div>年龄<input type="text" class="age" /></div>
				<div><input type="button" class="queren" value="确认" /></div>
			</div>
		`;
		div.addEventListener("click",function(e){
			if(e.target.classList.contains("queren")){
				var inputs = [...div.querySelectorAll("input[type='text']")];
				var attr = {}
				inputs.forEach(function(item){
					attr[item.className] = item.value
				})

				obj.success && obj.success(attr)
				setTimeout(function(){
					V(div,"fadeOut",{
						duration:300,
						complete(){
							div.remove();
						}
					});	
				},0)
							
			}
		})
		document.body.appendChild(div)
		V(div,"fadeIn",300);
	}

	return {
		form:Win
	}
})
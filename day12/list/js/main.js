require.config({
	baseUrl:"js/"
})

require(["getDOM","data","list","myWin"],function(D,data,L,W){
	var list = new L({
		data:data,
		list:D(".list"),
		delAction(el){
			list.del(el.innerHTML);
		}
	})


	D(".add").onclick = function(){
		W.prompt("请输入信息","",function(text){
			if(text){
				list.add(text);
			}
			
		})		
	}
})
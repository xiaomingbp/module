require.config({
	baseUrl:"js/"
})

require(["getDOM","list","data"],function(D,L,data){
	var list = new L({
		data:data,
		box:D(".box")
	})


	D(".slt").onchange = function(){
		if(this.value){
			list.sort(this.value);  // 模块抛出的方法
		}
	}


	D(".btn").onclick = function(){
		list.del(D(".key").value) // 模块抛出的方法
	}
})
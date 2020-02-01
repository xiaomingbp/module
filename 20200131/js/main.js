require.config({
	baseUrl:"js/"
})

require(["getDOM","data","list","form"],function(D,data,L,W){
	var list = new L({
		data:data,
		box:D(".box")
	})


	D(".add").addEventListener("click",function(){
		W.form(function(item){
			list.add(item)
		})
	});
})
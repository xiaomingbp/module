require.config({
	baseUrl:"js/"
})

require(["getDOM","data","xiala"],function(D,data,L){
	new L({
		data:data,
		box:D(".box"),
		list:D(".list")
	})
})
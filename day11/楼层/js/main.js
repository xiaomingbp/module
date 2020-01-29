require.config({
	baseUrl:"js/"
})

require(["getDOM","data","louceng"],function(D,data,L){
	new L({
		data:data,
		box:D(".box"),
		fixed:D(".fixed")
	})
})
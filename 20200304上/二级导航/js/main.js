require.config({
	baseUrl:"js/"
})

require(["getDOM","data","menu"],function(D,data,Menu){
	new Menu({
		data:data,
		menu:D(".menu"),
		main:D(".main")
	})
})
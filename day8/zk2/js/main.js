require.config({
	baseUrl:"js/"
});

require(["data","list"],function(data,L){

	new L({
		data:data,
		list:".list"
	})

	console.log(L)
	
})
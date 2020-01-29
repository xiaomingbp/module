require.config({
	baseUrl:"js/"
})

require(["getDOM","page"],function(D,page){
	new page({
		page:D(".page"),
		action(index){
			console.log(index)
		}
	});
})
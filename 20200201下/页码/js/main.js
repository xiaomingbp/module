require.config({
	baseUrl:"js/"
})

require(["getDOM","page"],function(D,P){
	new P({
		page:D(".page"),
		action(data){
			console.log(data);
		}
	})
})
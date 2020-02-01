require.config({
	baseUrl:"js/"
})

require(["getDOM","tab1","data"],function(D,tab,data){
	new tab({
		data:data,
		btns:D(".btns"),
		cons:D(".cons")
	})
})
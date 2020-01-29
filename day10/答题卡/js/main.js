require.config({
	baseUrl:"js/"
})

require(["getDOM","list","data"],function(D,L,data){
	new L({
		data:data,
		list:D(".list"),
		answer:D(".answerbar"),
		submit:D(".submit")
	})
})
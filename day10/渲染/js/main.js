require.config({
	baseUrl:"js/"
});

require(["getDOM","data","list"],function(D,data,L){
	new L({
		data:data,
		box:D(".box"),
		answers:D(".answers"),
		submit:D(".submit")
	})
})
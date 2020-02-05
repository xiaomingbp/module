require.config({
	baseUrl:"js/"
})

require(["getDOM","danmu"],function(D,DM){
	new DM({
		box:D(".box"),
		msglistul:D(".msglist>ul"),
		text:D(".text"),
		btn:D(".btn")
	})
})
require.config({
	baseUrl:"js/"
})

require(["getDOM","menu","data"],function(D,M,Data){
	new M({
		data:Data,
		menuBox:D(".menu"),
		menuTop:D(".toggle"),
		menuList:D(".menu_list")
	})
})
require(["getDom","menu"],function(D,M){
	new M({
		menu:D.getClass(".menu"),
		top_btn:D.getClass(".top img"),
		menu_title:[...D.getClass(".menu_item .title")]
	})
})
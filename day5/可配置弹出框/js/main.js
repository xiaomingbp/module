//配置
require.config({
	baseUrl:"js/"
})
//主模块
require(["getDom","alert"],function(D,W){
	D.getClass(".btn")[0].onclick = function(){
		W.alert({
			title:"是否删除",
			queren:"ok",
			quxiao:"no",
			success:function(){
				alert("ok");
			},
			close:function(){
				alert("no")
			}
		});
	}
})
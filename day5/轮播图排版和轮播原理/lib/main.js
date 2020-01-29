require.config({
	baseUrl:"js/"
})
require(["getDom","velocity.min"],function(D,V){
	var index = 1;
	var pos_left = 1000;
	setInterval(function(){
		V(
			D.getClass(".imgs"),
			{
				left:-index * pos_left + "px"
			},{
				duration:300,
				complete(){
					if(index > 3){
						index = 1;
						D.getClass(".imgs").style.left = "0px"
					}
				}
			}
		);
		index++;
	},2000)		
})
require.config({
	baseUrl:"js/"
})

require(["getDOM","select","data"],function(D,S,data){
	new S({
		data:data,		
		search:D(".search"),
		list:D(".list"),
		fn(data){
			D(".box").innerHTML += `<span>${data} <b>X</b></span>`
		}
	})

	D(".box").onclick = function(e){
		if(e.target.tagName === "B"){
			e.target.parentNode.remove();
		}
	}

})
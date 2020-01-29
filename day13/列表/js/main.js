require.config({
	baseUrl:"js/"
})

require(["getDOM","list","data","page"],function(D,L,data,P){
	var list = new L({
		data:data,
		template(item,index){
			return `
				<tr>
					<td><a href="#">${item}</a></td>
				</tr>
			`
		},
		list:D(".list")
	})

	new P({
		page:D(".page"),
		count:list.count,		
		action(index){
			list.update(index);
		}
	});

})
require.config({
	baseUrl:"js/"
})

require(["data","shopping","getDOM","myWin","car"],function(data,S,D,W,Car){
	new S({
		data:data,
		goodsList:D(".goods_list"),
		getAddGoods:function(dItem){
			var glist = D(".glist")
			glist.innerHTML += `<tr>
				<th><input type="checkbox"></th>
				<th>${dItem.title}</th>
				<th><img src="${dItem.src}" alt=""></th>
				<th>${dItem.price}</th>
				<th>${dItem.desc}</th>
				<th>
					<input type="button" class="jian" value="-">
					<input type="text" class="num" value="1">
					<input type="button" class="jia" value="+">
				</th>
				<th><input type="button" class="del" value="删除"></th>
			</tr>`
		}
	})

	D(".add").onclick = function(){
		W.form({
			returnDate:function(data){
				D(".goods_list").innerHTML += `
					<div class="item" desc="${data.desc}">
						<img src="imgs/1.jpg" alt="">
						<div class="title">${data.title}</div>
						<div class="price">${data.price}</div>
						<div>
							<input type="button" 
								data-title="${data.title}"
								data-price="${data.price}"
								data-desc="${data.desc}"
								data-src="${data.src}"
							 	class="addcar" value="添加购物车">
							<input type="button" class="shoucang" value="收藏">
						</div>
					</div>
				`
			}
		})
	}

	D(".carbtn").onclick = function(){
		D(".car").classList.add("active");
	}

	new Car({
		car:D(".car")
	})
})
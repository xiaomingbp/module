require.config({
	baseUrl:"js/"
})

require(["getDOM","tab","myWin","alert"],function(D,tab,W,A){
	new tab({
		btns:D(".left div"),
		cons:D(".right div"),
	})


	D(".add").onclick = function(){
		W.form({
			success:function(data){
				if(!data.username || !data.jiguan || !data.age){
					alert("用户名，籍贯，年龄不能为空")
					return;
				}
				D(".list").innerHTML += `
				<tr>
					<td>${data.username}</td>
					<td>${data.jiguan}</td>
					<td>${data.age}</td>
					<td><input type="button" value="删除" class="del"></td>
				</tr>`
				A.alert({
					text:"添加成功"
				});
			}
		})
	}

	D(".list").addEventListener("click",function(e){
		if(e.target.classList.contains("del")){
			if(confirm("是否删除？")){
				e.target.parentNode.parentNode.remove();
			}
		}
	})
})
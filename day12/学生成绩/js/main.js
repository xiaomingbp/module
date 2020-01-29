require.config({
	baseUrl:"js/"
})

require(["getDOM","data","list","myWin","form"],function(D,data,L,W,F){
	var list = new L({
		data:data,
		list:D(".list"),
		//点击删除时调用的回调函数
		delAction(el){
			//el是点击删除按钮
			
			//弹出框里的确认框
			W.confirm("是否删除?",function(bl){
				//点击确认时bl=true，取消时bl=false
				if(bl){
					//列表模块里的删除方法
					list.del({
						name:el.parentNode.parentNode.children[0].innerText,
						lilun:el.parentNode.parentNode.children[1].innerText,
						jineng:el.parentNode.parentNode.children[2].innerText,
					});
				}
			})
		},
		editAction(data){
			//F是表单弹框模块
			F({
				//表单里显示的默认数据
				data:data,
				//returnValue是确认和取消是调用的回调函数			
				returnValue(fromdata){
					//点击确认时fromdata=表单内容,点击取消时fromdata=false
					if(fromdata){
						//列表模块里的编辑方法						
						list.edit(data,fromdata);
					}
				}
			})
		}
	});
	


	D(".add").onclick = function(){
		//F是表单弹框模块
		F({
			//returnValue是确认和取消是调用的回调函数			
			returnValue(fromdata){
				//点击确认时fromdata=表单内容,点击取消时fromdata=false
				if(fromdata){
					//列表模块里的添加方法
					list.add(fromdata);
				}
			}
		})
	}
})
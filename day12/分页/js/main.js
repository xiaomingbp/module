require.config({
	baseUrl:"js/"
})

require(["getDOM","data","page1","form","myWin"],function(D,data,P,F,W){
	var p = new P({
		data:data,
		list:D(".list"),
		page:D(".page"),
		editAction(data){
			F({
				data:data,
				//returnValue是确认和取消是调用的回调函数			
				returnValue(fromdata){
					//点击确认时fromdata=表单内容,点击取消时fromdata=false
					if(fromdata){
						//列表模块里的添加方法
						p.edit(data,fromdata);
					}
				}
			})
		},
		delAction(e){
			W.confirm("是否删除?",function(bl){
				if(bl){
					p.del({
						name:e.children[0].innerHTML,
						lilun:e.children[1].innerHTML,
						jineng:e.children[2].innerHTML
					})
				}
			})
		}
	})

	D(".sort").onchange = function(){
		p.sort(D(".sort").value,true);
	}

	D(".search").oninput = function(){
		p.filter(D(".search").value)
	}

	D(".add").onclick = function(){
		//F是表单弹框模块
		F({
			//returnValue是确认和取消是调用的回调函数			
			returnValue(fromdata){
				//点击确认时fromdata=表单内容,点击取消时fromdata=false
				if(fromdata){
					//列表模块里的添加方法
					p.add(fromdata);
				}
			}
		})
	}
})
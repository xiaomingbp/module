require.config({
	baseUrl:"js/"
})

require(["getDOM","data","page1","form","myWin"],function(D,data,P,F,W){
	var p = new P({
		data:data,
		list:D(".list"),
		page:D(".page"),
		editAction(id){
			var dataItem = null;
			for(var i=0;i<data.length;i++){
				if(data[i].id == id){
					dataItem = data[i];
					break;
				}
			}
			F({
				data:dataItem,
				//returnValue是确认和取消是调用的回调函数			
				returnValue(fromdata){
					//点击确认时fromdata=表单内容,点击取消时fromdata=false
					if(fromdata){
						//列表模块里的添加方法
						p.edit(id,fromdata);
					}
				}
			})
		},
		delAction(id){
			W.confirm("是否删除?",function(bl){
				if(bl){
					p.del(id);
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
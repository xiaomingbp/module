require.config({
	baseUrl:"js/"
})

require(["getDOM","myWin","info","data"],function(D,W,I,data){

	var list = new I({
		data:data, // 页面上显示的默认的学生成绩信息
		list:D(".list"), // 渲染学生信息的盒子
		update:function(item,fn){ // 点击编辑时调用的函数   item是要编辑的行的数据，fn是返回数据的函数
			var that = this;
			//弹框
			W.form({
				//弹框表单里默认显示的数据
				data:{
					username:item.username,  //姓名框里信息的信息
					lilun:item.lilun, // 理论成绩
					jineng:item.jineng // 技能成绩
				},
				//点击弹框确认键时将返回弹框表单内容
				returnDate:function(data){ // 点击弹框确认按钮是调用的函数					
					data.id = item.id;
					//回调函数的方式将修改好的数据传递到列表对象里
					fn(data);
				}
			})
		}
	})


	D(".add").onclick = function(){ // 新增按钮的点击事件
		//弹框
		W.form({
			//点击弹框确认键时返回的表单数据
			returnDate:function(data){
				list.add(data)
			}
		})
	}
})
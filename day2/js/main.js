require.config({
	baseUrl:"js/lib/",
	paths:{
		tz:"tuozhuaihezi",
		jq:"https://cdn.staticfile.org/jquery/1.10.2/jquery.min"
	}
})

require(["tz","jq"],function(tz,jq){
	
})


/*
	
 	引用require文件
 	指向主文件的（主模块）
	主模块
	定义模块
	require模块和自定义模块的第一个参数（依赖）
		依赖项
		依赖文件
		依赖模块

	require的配置：
		基准目录（根路径）：baseUrl:""
		别名:paths:{  // AMD规范都可以
		
			}	
			shim: { // AMD和非AMD规范都可以
		        'backbone': {
		            deps: ['underscore', 'jquery'],
		            exports: 'Backbone'
		        },
		        'underscore': {
		            exports: '_'
		        },
		        'modal':{//模态框插件不是模块化
		            deps:['jquery'],
		            export:"m"
		        },
		    }


		Object.assign(this,opt);


		var a = {}
		var b = {
			name:"xiaoming"
		}
		var c = {
			
			show:function(){
	
			}
		}

		Object.assign(a,b,c); // 合并对象或继承对象
		
		a = {
			name:"xiaoming",
			show:function(){
	
			}
		}

 */
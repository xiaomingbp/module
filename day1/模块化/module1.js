var obj = {
	name:"xiaoming",
	age:12,
	show1:function(){

	},
	show2:function(){

	}
}


obj.name;
obj.age;
obj.show1();
obj.show2();


/******************************************************/


var module = (function(){
	var obj = {
		name:"xiaoming",
		age:12,
		show1:function(){

		},
		show2:function(){

		}
	}
	return {
		name:obj.name,
		show1:obj.show1
	}
})();

// module.name
// module.show1();


//目的解决将所有属性和方法暴露的问题。
// 用自执行函数实现的模块

/**************************************************/
//放大模式

var module = (function(module2){
	module2.show3 = function(){

	}
	return module2;
})(module)

console.log(module);
//在原有模块的基础上扩展一下属性和方法的操作

/***************************************************/
//放宽模式
//

var abc;
var module3 = (function(module2){
	module2.show3 = function(){

	}
	return module2;
})(abc || {})

//解决的问题是：如果事先没有模块的话就创建一个模块，如果有的话就扩展这个模块
console.log(module3)




define(function(){
	function Sanjiliandong(obj){
		this = {};
		/*
			obj = {
				box:document.querySelector(".box"),
				sheng:document.querySelector(".sheng"),
				shi:document.querySelector(".shi"),
				qu:document.querySelector(".qu")
			}
			
			this = {
				
			}

			Object.assign(this,obj)
				this.box = obj.box;
				this.sheng = obj.sheng;
				this.shi = obj.shi;
				this.qu = obj.qu;
		*/

		Object.assign(this,obj) // 合并对象或继承对象
		this.init();
	}
	Sanjiliandong.prototype = {
		constructor:Sanjiliandong,
		
	}


	new Sanjiliandong({
		box:document.querySelector(".box"),
		sheng:document.querySelector(".sheng"),
		shi:document.querySelector(".shi"),
		qu:document.querySelector(".qu")
	})
})


// var obj = {
// 	name:111
// }

// var obj2 = {
// 	age:"100"
// }

// var obj3 = {
// 	age:"200",
// 	sex:"nan"
// }
// var newobj = Object.assign({},obj,obj2,obj3);


// console.log(newobj)
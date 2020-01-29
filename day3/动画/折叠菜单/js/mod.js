define(["velocity.min"],function(V){
    var Menu = function(opt){
        //设置必填项
        if(!opt.container){
            alert("容器必须传递");
            return;
        }
        Object.assign(this,opt);
        this.init();
    }
    Menu.prototype = {
        constructor:Menu,
        init:function(){
            this.render();
            this.bindEvent();
        },
        /**
         * 渲染数据
         */
        render:function(){
            this.container.innerHTML = this.data.map(function(item){
                return `<li>
                <h3>${item.title}</h3>
                <ul>
                   ${item.contents.map(function(ele){
                        return `<li>${ele}</li>`
                   }).join("")}
                </ul>
            </li>`
            }).join("")
        },
        /**
         * 绑定事件
         */
        bindEvent:function(){
            var that = this;
            this.container.onclick = function(e){
                var ev = e || window.event;
                var ele = ev.target || ev.srcElement;
                if(ele.tagName === "H3"){
                    var target = that.container.querySelector(".on");
                    if(target){
                        V(target,"slideUp",2000);
                        target.classList.remove("on");
                    }
                    var ul = ele.nextElementSibling;
                    if(ul.style.display!=="block"){
                        V(ul,"slideDown",2000);
                        ul.classList.add("on");
                    }else{
                        V(ul,"slideUp",2000);
                        ul.classList.remove("on");
                    }
                }
            }
        }
    }
    return Menu;
})
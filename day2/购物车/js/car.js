define(["data"],function(d){
    function Car(obj){
        this.data = d.car;
        this.list = document.querySelector(obj.list);
        this.datalist = document.querySelector(obj.datalist);
        this.box = document.querySelector(obj.box);
        this.allprice = document.querySelector(obj.allprice);
        
        this.render();
        this.bindEvent();
    }
    Car.prototype.render = function(){
        this.datalist.innerHTML = this.data.map(function(item,i){
            return `<tr>               
                <td>${item.title}</td>
                <td><img src="${item.src}"></td>
                <td>${item.desc}</td>
                <td>${item.price}</td>               
                <td><input type="button" class="add" data-i="${i}" value="添加"></td>
            </tr>`
        }).join("")
    }
    Car.prototype.bindEvent = function(){
        var that = this;
        this.box.addEventListener("click",function(e){
            //全选
            if(e.target.classList.contains("allcheck")){
                that.box.querySelectorAll("input[type='checkbox']").forEach(function(item){
                    item.checked = e.target.checked;
                })
            }
            //jia
            if(e.target.classList.contains("jia")){
                e.target.previousElementSibling.value++;
                //小计
                e.target.parentNode.nextElementSibling.innerHTML = e.target.parentNode.previousElementSibling.innerHTML * e.target.previousElementSibling.value
                //总计
                var all = 0;
                that.box.querySelectorAll(".smallprice").forEach(function(item){
                    all += item.innerHTML*1
                })
                that.allprice.innerHTML = all;
            }
            //jian
            if(e.target.classList.contains("jian")){
                e.target.nextElementSibling.value--;
                if(e.target.nextElementSibling.value < 0){
                    e.target.nextElementSibling.value = 0;
                }
                //小计
                e.target.parentNode.nextElementSibling.innerHTML = e.target.parentNode.previousElementSibling.innerHTML * e.target.nextElementSibling.value
                //总计
                var all = 0;
                that.box.querySelectorAll(".smallprice").forEach(function(item){
                    all += item.innerHTML*1
                })
                that.allprice.innerHTML = all;
            }
            //del
            if(e.target.classList.contains("del")){
                e.target.parentNode.parentNode.remove();
                var all = 0;
                that.box.querySelectorAll(".smallprice").forEach(function(item){
                    all += item.innerHTML*1
                })
                that.allprice.innerHTML = all;
            }
            //alldel
            if(e.target.classList.contains("alldel")){
                that.list.innerHTML = ""
                var all = 0;
                that.box.querySelectorAll(".smallprice").forEach(function(item){
                    all += item.innerHTML*1
                })
                that.allprice.innerHTML = all;
            }
            //添加
            if(e.target.classList.contains("add")){
                var dataitem = that.data[e.target.getAttribute("data-i")]            
                that.list.innerHTML += `<tr>
                    <td><input type="checkbox" class="check"></td>
                    <td>${dataitem.title}</td>
                    <td><img src="${dataitem.src}" alt=""></td>
                    <td>${dataitem.desc}</td>
                    <td>${dataitem.price}</td>
                    <td>
                        <input type="button" value="-" class="jian">
                        <input type="text" value="0" class="num">
                        <input type="button" value="+" class="jia">
                    </td>
                    <td class="smallprice">0</td>
                    <td><input type="button" value="删除" class="del"></td>
                </tr>`            

            }
        })
    }
    return Car;
})

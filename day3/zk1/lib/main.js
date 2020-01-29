require.config({
	baseUrl:"lib/",
	paths:{
		"V":"velocity.min",
		"myWin":"myWindow"
	}
})

require(["myWin"],function(W){
	var btn = document.getElementById("btn");
	btn.onclick = function(){
		W.alert({
			title           : '温馨提醒',   //弹框标题
            content         : '换肤功能实现喽', //弹框内容
            btnText         : '确定111', //弹框按钮 确定
            width           : 500,  //弹框宽度
            height          : 300, //弹框高度
            skinName        : 'red',  //弹框换色
            hasMask         : false,   //弹框遮罩层 是否显示
			handlerSureBtn : function(){
                alert('我是点击确定按钮后的回调...');
            },
            handlerCloseBtn : function(){
                alert('我是点击关闭按钮后的回调...');
            }
		});
	}
	
})
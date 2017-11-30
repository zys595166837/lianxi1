/*
* @Author: Administrator
* @Date:   2017-11-30 11:23:29
* @Last Modified by:   little_fairy
* @Last Modified time: 2017-11-30 11:58:07
*/
// 创建应用模块
var app=angular.module("yike",[]);
app.run(["$rootScope",function($rootScope){
	// 在根目录绑定collapse属性,初始值为false
		//表示nav,header,body没有弹出
	$rootScope.collapse=false;
	$rootScope.toggle=function(){
		// alert(111)
		$rootScope.collapse=!$rootScope.collapse;
		// 将导航栏的小标题添加显示和隐藏效果
		// 获取所有的dd
		var dds=document.querySelectorAll("dd");
		循环遍历每一个dd,修改dd的样式达到隐藏的效果
		if ($rootScope.collapse) {
			// 如果值为true,显示,
			
		}else{//false.隐藏

		}
	}
}])
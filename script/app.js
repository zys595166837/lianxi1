/*
* @Author: Administrator
* @Date:   2017-11-30 11:23:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-30 11:25:56
*/
// 创建应用模块
var app=angular.module("yike",[]);
app.run(["$rootScope",function($rootScope){
	$rootScope.toggle=function(){
		alert(111)
	}
}])
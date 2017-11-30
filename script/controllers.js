// 该文件用于存放控制器
// 创建一个独立的模块,该模块的作用用于创建不同的控制器方便其他模块直接使用
	var ctrl=angular.module("ctrls",[])
// 创建控制器navs,只要作用模拟导航栏数据
	ctrl.controller("navs",["$scope",function($scope){
	$scope.navs=[
	{"href":"#/index","icon":"icon-home","text":"今日一刻"},
	{"href":"#/older","icon":"icon-file-empty","text":"往期内容"},
	{"href":"#/author","icon":"icon-pencil","text":"热门作者"},
	{"href":"#/category","icon":"icon-menu","text":"栏目浏览"}
	];
}])

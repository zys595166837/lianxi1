// 创建模块
// 新建controllers.js，将该控制器模块依赖，添加依赖关系，写进[]里面
var app = angular.module("app",["ctrls","ngRoute"]);
// 模块创建后，在根作用域上绑定一个toggle方法
// run方法的作用是：模块一旦创建成功立即执行
app.run(["$rootScope",function($rootScope){
	// 在根作用域上绑定的toggle方法，其作用为：
	// 1. 绑定一个值collapsed，值为true或false
	//     当触发toggle方法时，如果为true，则改成false，如果为false，则改成true
	// 2. 将侧边导航栏的具体内容进行移动
	$rootScope.collapsed = false;
	$rootScope.toggle = function(){
		// 将上一次绑定的collapsed的值取反
		$rootScope.collapsed = !$rootScope.collapsed;
		// 将导航栏的内容显示或隐藏
		// 获取所有的导航栏中的dd
		var dds = document.querySelectorAll("dd");
		if($rootScope.collapsed){//true，显示
			for(var i = 0;i < dds.length;i++){// 遍历所有的dd
				dds[i].style.transform = "translate(0)";
				//设置过渡的效果
				dds[i].style.transitionDuration = (i+2)*0.15+"s";
			}
		}else{// false，隐藏
			for(var i = 0;i < dds.length;i++){// 遍历所有的dd
				dds[i].style.transform = "translate(-100%)";
				//设置过渡的效果
				dds[i].style.transitionDuration = (dds.length-i)*0.15+"s";
	  		}	
	 	 }
	  }
}]);









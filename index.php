<?php
	//后端路由 根据URL 的不同响应不同的页面

	header('Content-Type:text/html;charset=utf-8');
	//echo '<div>主页内容</div>';
	//include 在当前PHP页面内部嵌入一个子页面
	//必需通过URL区分出用户想访问的哪个页面
	//include('./views/main/index.html');

	//$_SERVER PHP中的全局变量，是一个数组 在访问的时候在后面加东西会多出来一个属性PATH_INFO
	//var_dump($_SERVER);
	//$path = $_SERVER['PATH_INFO'];
	////echo $path;
	//include('./views'.$path.'.html');

	//默认路径 目录名称
	$dir  = 'main';
	//默认文件名称
	$filename = 'index';
	//数组提供的属性 判断PATH_INFO在$_SERVER这里是否存在
	//处理URL路径
	if(array_key_exists('PATH_INFO', $_SERVER)){
		//PATH_INFO属性存在
		//获取请求
		$path = $_SERVER['PATH_INFO']; //得到的结果/main/index
		// 去掉第一个斜杠
		$str = substr($path,1);
		//字符串分割，explode和js中的split方法很像
		$ret = explode('/', $str);//返回数组，有长度
		if(count($ret) == 2){
			$dir = $ret[0];// 覆盖目录
      		$filename = $ret[1]; // 覆盖文件名称
		}else{
			// 其他情况全部跳转到登录页面
      		$filename = 'login';
		}

	}
	
	// 嵌入子页面
	include('./views/'.$dir.'/'.$filename.'.html');
?>
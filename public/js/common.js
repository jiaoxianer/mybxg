/*目前不是模块化所以要重构 define(); 
看一个模块是不是标准模块只要看代码中有没有define，如果有就不用做兼容*/
/*引入cookie依赖不需要有额外的参数接，因为cookie本身就是jQuery的插件，他插到了$上*/
define(['jquery','template','cookie'],function($,template){
	/*NProgress.start();
	NProgress.done();*/

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//实现退出功能
	$('#logoutBtn').click(function(){
		
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function (data){
				if(data.code == 200){

					//重新跳转到登入页面
					location.href = '/main/login';
				}
			
			}
		})
	});
	//检测用户是否登录
	var flag = $.cookie('PHPSESSID');
	//这个属性是为了阻止在判断的时候PHPSESSID不存在，一直在刷新页面，加上location.pathname != '/main/login' 的时候
	//console.log(location.pathname);
	if(!flag && location.pathname != '/main/login' ){
		//如果cookie不存在跳转到登录页
		location.href = '/main/login';
	}

    //设置用户头像信息
   // console.log($.cookie('loginInfo'));
   var loginInfo = $.cookie('loginInfo');
   loginInfo = loginInfo && JSON.parse(loginInfo);
   //设置用户的头像信息
  //$('.aside .profile img').attr('src',loginInfo.tc_avatar);
  //$('.aside .profile h4').html(loginInfo.tc_name);
  
  var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
  var html = template.render(tpl,loginInfo);
  $('.aside .profile').html(html);
});
	
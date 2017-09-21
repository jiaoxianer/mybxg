define(['jquery','cookie'],function($){
	//登录功能
	 $('#loginBtn').click(function(){
        //ajax不能跨域，所以后台要做发你选反向代理 url
            $.ajax({
                type: 'post',
                url: '/api/login',
                data: $('#loginForm').serialize(),
                dataType:'json',
                success:function (data){
                    if(data.code == 200){
                        //把用户的登录信息存储到cookie中，方便跨域获取数据
                        //登录成功跳转到主页面
                        $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                        location.href = '/main/index';
                    }
                }
            });
            //阻止按钮的默认submit的自动跳转
            return false;
        });
});
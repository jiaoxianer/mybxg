define(['jquery','util','form'],function($,util){
	//设置导航菜单选中
	util.setMenu(location.pathname);
	//绑定表单单击事件
	$('#courseBtn').click(function(){
		console.log($('#courseForm').serialize());
		//表单提交插件
		$('#courseForm').ajaxSubmit({
			type : 'post',
			url : '/api/course/create',
			dataType : 'json',
			success:function(data){
				if(data.code == 200){
					location.href = "/course/basic?cs_id"+data.result.cs_id;
					//console.log(data)
				}
			}
		});
	});


});
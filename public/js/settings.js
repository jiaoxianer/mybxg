define(['jquery','template','ckeditor','uploadify','region','datepicker','language'],function($,template,CKEDITOR){
  // 调用接口获取个人信息
  $.ajax({
    type : 'get',
    url : '/api/teacher/profile',
    dataType : 'json',
   	success : function(data){
   		//解析数据渲染页面
   		var html = template('settingsTpl',data.result);
   		$('#settingsInfo').html(html);
   		//上传头像，必须成功函数里，因为请求是异步的
   		$('#upfile').uploadify({
   			width : 120,
   			height: 120,
   			buttonText : '',
   			itemTemplate : '<span></span>',
   			swf:'/public/assets/uploadify/uploadify.swf',//用来实现文件上传的功能
   			uploader : '/api/uploader/avatar',//那个接口来处理这个文件上传，就是文件上传给谁
   			fileObjName : 'tc_avatar',
   			onUploadSuccess : function(a,b){//上传成功之后返回的内容接受一下
   				console.log(1111111)
   				var obj = JSON.parse(b);//这两行的代码时事实更新的图片
          		$('.preview img').attr('src',obj.result.path);
   			}
   		});
   		

   		//省市县三级联动功能
   		$('#pcd').region({
   			url:'/public/assets/jquery-region/region.json'
   		});
   		//处理富文本
   		CKEDITOR.replace('editor',{
        toolbarGroups : [
          { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
          { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
        ]
      });

   	}
  });
});

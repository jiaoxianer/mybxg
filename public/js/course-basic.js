define(['jquery','template','util'],function($,template,util){
// 设置导航菜单选中
  util.setMenu('/course/add');
   // 获取课程ID
  var csId = util.qs('cs_id');
  // 获取操作标志位
  var flag = util.qs('flag');
  // 根据课程ID查询课程相关信息
  $.ajax({
    type : 'get',
    url : '/api/course/basic',
    data : {cs_id : csId},
    dataType : 'json',
    success:function(data){
    	//console.log(data);
    	//根据参数不同判断是编辑还是添加
    	if(flag){
    		data.result.operate = '课程编辑';
    	}else{
    		data.result.operate = '课程添加';
    	}
    	var html = template('basicTpl',data.result);
    	$('#basicInfo').html(html);
    }
  });
});
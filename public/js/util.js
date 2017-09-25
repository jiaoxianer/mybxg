define(['jquery'],function($){
	return {
		qs : function(key){
			//根据location的search方法，截取地址栏后面的参数，并且第一个问号不要
			  var param = location.search.substr(1);
			  var result = null;
			  if(param){
			    //有可能地址栏中有很多参数所以要按照&符号分割，然后遍历，
			    var ps = param.split('&');
			    $.each(ps,function(index,item){
			      var kv = item.split('=');
			      if(kv[0] == key){
			        result =kv[1];
			        return false; //终止each循环
			      }
			    })
			  }
			  return result;
		},
		setMenu:function(path){
			$('.aside .navs a[href="'+path+'"]').addClass('active').closest('ul').show();
		}
	}
})
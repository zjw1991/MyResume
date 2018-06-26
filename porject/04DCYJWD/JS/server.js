$(function(){

	$(window).scroll(function(){
			    if($(window).scrollTop()>1500){
			   		 $('#btn4').css("display","block");			   
			    }
			    else{
			    	$('#btn4').css("display","none");
			    };

			});

	/*验证手机号码*/
	var myreg = /^1[34578]\d{9}$/;
	$('#phone').blur(function(){
		if (!myreg.exec($('#phone').val())){
				$('#info').html('请输入正确的手机号码')
				$('#info').css('color','red')
				$('#phone').val('');
			}
			else{
				$('#info').css('color','green')
				$('#info').html('验证完成，请答题')
			}
	})	

	/*如果没有通过手机号码验证,点击选项会弹出弹框*/
	$('input[type=radio]').click(function(){
		if($('#phone').val() == ''){
			alert('请输入手机号码');
			
			 window.location.reload();
		   /*history.go(0);*/
		   /*window.location.reload(true);*/
		   /* location.assign(location);*//*跳转头部*/
		   /*location.assign(location);*//*跳转头部*/
		   /*location=location;*//*跳转头部*/
		   /*location.replace(location);*//*跳转头部*/
		}
		else{

		}
	})


	$('#btn2').click(function(){
		/*获取input*/
		var num1 = $('input[name=num1]');
		var num2 = $('input[name=num2]');
		var num3 = $('input[name=num3]');
		var num4 = $('input[name=num4]');
		var num5 = $('input[name=num5]');
		/*检测问题是否全部选中*/
		if(!num1.is(':checked') || !num2.is(':checked') || !num3.is(':checked') || !num4.is(':checked') ||!num5.is(':checked')){
			alert('请回答全部问题');
		}else{
			/*将答题选项存入数组*/	
		    var answer = ""+$('input[name=num1]:checked').val()+$('input[name=num2]:checked').val()+$('input[name=num3]:checked').val()+ $('input[name=num4]:checked').val() + $('input[name=num5]:checked').val();
			
			/*将手机号码和答题选项存入json*/
			var params = {
					"mobileNumber":$.trim($('#phone').val()),
					"answer": $.trim(answer) 
			};
			/*sql地址*/
			var url = "";
			$.ajax({
		        url: url,
		        type: 'POST',
		        data:params,
		        dataType: 'html',
		        success: function (result) {
		        	if(result == ''){
		        		alert("该手机号已参与过活动");
		        	}else if(result == ''){
		        		alert("手机号码不能为空");
		        	}else if(result == ''){
		        		alert("请回答相关问题后再提交");
		        	}else if(result == ''){
		        		alert("您的问题没有回答完整");
		        	}else{
		        		$('.mask').css({'display': 'block'}); 
			 			$('.btn3').css({'display': 'block'});
			 			$('.score').css({'display': 'none'});
			 			$('.score[show='+result+']').css({'display': 'block'});//根据后台返回的结果显示相应的弹框
		        	}

		 			/*点击确定，清空手机号并复位选项*/
		 			$('.btn3').click(function() {
		 				$('#phone').val("");
		 				$('input[name=num1]').removeAttr("checked");
		 				$('input[name=num2]').removeAttr("checked");
		 				$('input[name=num3]').removeAttr("checked");
		 				$('input[name=num4]').removeAttr("checked");
		 				$('input[name=num5]').removeAttr("checked");
		 				scrollTo(0,0);
		 				$('.mask').hide();
		 				$('.score[show='+result+']').css({'display': 'none'});//隐藏弹框
		 				$('.btn3').hide();
		 				//window.location.href=encodeURI('http://www.dcfund.com.cn/dcjj/?SIP=N');
		 			});
		        }
			}); 
		}
	})



})
	
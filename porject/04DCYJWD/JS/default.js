$(function(){

	/*悬浮框，找答案，点这里*/
	$(window).scroll(function(){
			    if($(window).scrollTop()>1500){
			   		 $('#btn4').css("display","block");			   
			    }
			    else{
			    	$('#btn4').css("display","none");
			    };

			});

	/*验证手机号码*/
	var myreg = /^1[3458]\d{9}$/;
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
			alert('请输入正确的手机号');
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

	/*点击提交按钮*/
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
			/*将号码和答题的选项存入数组*/
			var arr = [];
			arr.push($('#phone').val());
			arr.push($('input[name=num1]:checked').val());
			arr.push($('input[name=num2]:checked').val());
			arr.push($('input[name=num3]:checked').val());
			arr.push($('input[name=num4]:checked').val());
			arr.push($('input[name=num5]:checked').val());
			alert(arr);	
			/*弹出框*/
			$('.mask').css({'display': 'block'}); 
			$('.active').css({'display': 'block'}); 
			$('.btn3').css({'display': 'block'});

			/*隐藏弹出框*/
			$('.btn3').click(function() { 
				$('.mask').hide();
				$('.active').hide();
				$('.btn3').hide();

			});
		}
	})



})
		
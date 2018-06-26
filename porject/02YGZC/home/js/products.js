
/*左边导航li效果*/
$(function(){  

	/*获取DOM*/
	var navBox = $('.tabTagBox'), 
		navList = $('.tabTagList'), 
		navs = navList.children('li'), 
		upBtn = $('.uPrev'), 
		downBtn = $('.dNext'), 
		contentBoxs = $('.tabcon');

	var opts = {
		moveH: 68, /*导航的li高度58*/
		moveSpeed: 500, /*点击箭头移动速度，数字越大速度越慢*/
		curMoveH: 0,
		curSumH: 0,
		curNavIndex: 0
	}
	

	opts.curSumH = (opts.moveH * navs.size()) - navBox.height();
	

	/*navToContentBox函数*/
	var navToContentBox = function () {
		navs.removeClass('current');
		contentBoxs.hide().eq(opts.curNavIndex).show();
	}


	/*navMove函数*/
	var navMove = function () {
		var _arg = arguments.length > 0 ? arguments[0] : '';
		
		if (_arg === 'up') {
			if (-opts.curSumH === opts.curMoveH) {
				/*alert('温馨提示：其他系列敬请期待！');*/
				return;
			}
			opts.curMoveH -= opts.moveH;
			opts.curNavIndex += 1;
		}
		if (_arg === 'down') {
			if (opts.curMoveH === 0) {
				/*alert('温馨提示：其他系列敬请期待！');*/
				return;
			}
			opts.curMoveH += opts.moveH;
			opts.curNavIndex -= 1;
		}

		/*调用navToContentBox函数*/
		navToContentBox();
		navs.eq(opts.curNavIndex).addClass('current');
		navList.animate({ top: opts.curMoveH + 'px' }, opts.moveSpeed);
	}

	
	/*点击调用navMove函数*/
	upBtn.click(function () {
		navMove('down');
	});

	downBtn.click(function () {
		navMove('up');
	});

	/*点击调用navToContentBox函数*/
	navs.click(function () {
		opts.curNavIndex = $(this).index();
		navToContentBox();
		$(this).addClass('current');
	});	
});



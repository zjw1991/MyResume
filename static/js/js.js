jQuery(document).ready(function ($) {


    //初始化 Stellar.js
    $(window).stellar();

    //缓存一些变量
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    //设置路径点插件
    slide.waypoint(function (event, direction) {

        //缓存与每个幻灯片相关联的数据幻灯片属性的变量
        dataslide = $(this).attr('data-slide');

        //如果用户卷起，则更改具有与幻灯片相同的数据幻灯片属性的导航链接，并从先前的导航链接中删除Active类。
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        //否则，如果用户向下滚动，将具有与幻灯片相同的数据幻灯片属性的导航链接更改为活动，并从下一个导航链接中删除Active类
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //当用户滚动到顶部时，WooPoT没有检测到第一个幻灯片，
    //所以我们添加了一小段代码，从导航链接幻灯片2中删除该类，并将其添加到导航链接幻灯片1。 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //创建一个函数，该函数将传递一个幻灯片编号，然后使用jQuysActudio滚动到该幻灯片。
    //还使用了jQuery轻松插件，所以我们通过了插件中的“EaseIn OutNutt”的宽松方法。
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    //当用户单击导航链接时，获取链接的数据幻灯片属性值，并将该变量传递给GotoByLoad函数
     links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //当用户clicks上的按钮，得到的数据得到的幻灯片attribute value”的按钮，通过和可变\ gotobyscroll功能
     button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});
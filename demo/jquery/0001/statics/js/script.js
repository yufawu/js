/*
 
 * 17素材vip建站专区模块代码
 * 详尽信息请看官网：http://www.17sucai.com/pins/vip
 *
 * Copyright , 温州易站网络科技有限公司版权所有
 * 图片不能商用，代码可商用。
 
 * 请尊重原创，未经允许请勿转载。
 * 在保留版权的前提下可应用于个人或商业用途
 
*/

$(function() {
	//PC端鼠标浮动展示子导航
	$(".nav ul li").hover(
		function() {
			$(this).children('').next().stop(true, true).delay(300).slideDown(400);
		},
		function() {
			$(this).children('').next().stop(true, true).delay(300).slideUp(400);
		}
	);
	//点击逐渐展开移动端导航
	$(".a_js").click(
		function() {
			$(".a_txt").stop(true, false).delay(0).animate({
				width: "100%",
				height: "100%"
			}, 0);
			$(".a_txt").find(".div1").stop(true, false).delay(0).animate({
				opacity: "0.9"
			}, 500);
			$(".a_txt").find(".div2").stop(true, false).delay(0).animate({
				opacity: "1"
			}, 500);
			$(".a_txt").find(".div3").stop(true, false).delay(0).animate({
				right: "0"
			}, 500);
		}
	)
	//点击关闭，逐渐隐藏
	$(".a_closed").click(
		function() {
			$(".a_txt").stop(true, false).delay(500).animate({
				width: "0",
				height: "0"
			}, 0);
			$(".a_txt").find(".div1").stop(true, false).delay(0).animate({
				opacity: "0"
			}, 500);
			$(".a_txt").find(".div2").stop(true, false).delay(0).animate({
				opacity: "0"
			}, 500);
			$(".a_txt").find(".div3").stop(true, false).delay(0).animate({
				right: "-80%"
			}, 500);
		}
	)
	//点击顶级菜单展开关闭子导航
	$('.div3 ul li').click(function() {
		$('.a_txt2:visible').slideUp().prev().removeClass('a_js2_on');
		var subnav = $(this).find('.a_txt2');
		console.log(subnav.is(':hidden'))
		if(subnav.is(':hidden')) {
			subnav.slideDown().prev().addClass('a_js2_on');
		} else {
			subnav.slideUp().prev().removeClass('a_js2_on');
		};
	})

});
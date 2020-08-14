//Swiper的API地址是https://www.swiper.com.cn/api/index.html
//animejs的API地址是https://www.animejs.cn/
function clock() {
	var myDate = new Date();
	hours = myDate.getHours();
	if (typeof oldhours != "undefined" == false) {
		oldhours = hours;
		change = true
	} else {
		if (oldhours != hours) {
			oldhours = hours;
			change = true
		} else {
			change = false
		}
	}
	if (change) {
		$("#index-banner").removeClass();
		if (hours < 6) {
			$("#index-banner").addClass('night'); //夜 6点前（不包含）
		} else if (hours < 11) {
			$("#index-banner").addClass('morning'); //晨	11点前（不包含）
		} else if (hours < 16) {
			$("#index-banner").addClass('noon'); //午	16点前	（不包含）
		} else if (hours < 19) {
			$("#index-banner").addClass('afternoon'); //昏19点前（不包含）
		} else {
			$("#index-banner").addClass('night'); //夜 19点后
		}
	}
}
clock();
setInterval("clock()", 1000)//每秒检测时间，不需要背景变化可去除

var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loopedSlides: 3,
	spaceBetween: 42,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

})

for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
	mySwiper.pagination.bullets[i].onmouseover = function() {
		this.click();
	};
}

$('.hoverNext').on('mouseenter', function() {
	next()
	mySwiper.autoplay.stop();
})

function next() {
	mySwiper.slideNext()
	tout = setTimeout(next, 1000)
}

$('.hoverPrev').on('mouseenter', function() {
	prev()
	mySwiper.autoplay.stop();
})

function prev() {
	mySwiper.slidePrev()
	tout = setTimeout(prev, 1000)
}
$('.hoverNext,.hoverPrev').on('mouseout', function() {
	clearTimeout(tout);
	mySwiper.autoplay.start();
})


window.onload = function() {
	var tl = anime.timeline({
		complete: function(anim) {
			mySwiper.autoplay.start();
			mySwiper.params.autoplay.disableOnInteraction = false;
			mySwiper.params.autoplay.delay = 4500;
		}
	});
	tl.add({
		targets: '.txt1',
		easing: 'linear',
		opacity: 1,
		duration: 1500
	}, '+=1000')
	tl.add({
		targets: '.txt2,.banner_m',
		easing: 'linear',
		opacity: 1,
		duration: 1000
	})
	tl.add({
		targets: '.txt1,.txt2',
		easing: 'linear',
		opacity: 0,
		duration: 1500
	}, '+=1000')
	tl.add({
		targets: '.swiper-slide',
		translateX: -mySwiper.virtualSize,
		duration: 1,

		easing: 'easeInSine'
	}, '-=500')
	tl.add({
		targets: '.swiper-container',
		opacity: 1,
	}, '+=1')

	tl.add({
		targets: '.swiper-slide',
		translateX: 0,
		duration: 1500,
		easing: 'easeOutQuint',
		complete: function(anim) {
			$('#index-banner .swiper-container').removeClass('animating');
		}
	}, '-=500')
	tl.add({
		targets: '.swiper-button-prev,.swiper-button-next,.swiper-pagination',
		easing: 'linear',
		opacity: 1,
		duration: 300,
		complete: function(anim) {
			$('.hoverAll').remove();
		}
	}, '+=500')
}
(function ($){

//##UserAgent判別
var ua = window.ua = {};//グローバル変数として設定
ua.name = window.navigator.userAgent.toLowerCase();
//IEバージョン判別
ua.isIE = (ua.name.indexOf('msie') >= 0 || ua.name.indexOf('trident') >= 0);
if (ua.isIE) {
	ua.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
	if (ua.verArray) {
		ua.ver = parseInt(ua.verArray[2], 10);
	}
}

//# COMMON.JS
$(function(){

	var
	$gnav = $('#goen-gnav'),
	$gnavNews = $gnav.find('.goen-gnav__item--news > a'),
	$gnavAbout = $gnav.find('.goen-gnav__item--about > a'),
	$gnavWorks = $gnav.find('.goen-gnav__item--works > a'),
	$gnavOtayori = $gnav.find('.goen-gnav__item--otayori > a'),
	$gnavBlog = $gnav.find('.goen-gnav__item--blog > a'),
	$gnavMono = $gnav.find('.goen-gnav__item--monogoen > a'),
	$body = $('body'),
	$container = $('#container'),
	$contact = $('#contact');



	//Grobal Menu
	//////////////////////////////

	//News
	var gnavNewsHoverTL = new TimelineMax({
		paused:true,onComplete:function(){
			gnavNewsLoopTL.play(0);
		}
	});
	var gnavNewsLoopTL = new TimelineMax({paused:true,repeat:-1});
	var gnavNewsRevTL = new TimelineMax({paused:true});

	gnavNewsHoverTL
		.set($gnavNews,{backgroundPosition:'0 0'})//0
		.set($gnavNews,{backgroundPosition:'0 -100px'},'+=0.1')//01
		.set($gnavNews,{backgroundPosition:'0 -200px'},'+=0.1')//02
		.set($gnavNews,{backgroundPosition:'0 -400px'},'+=0.1');//1

	gnavNewsLoopTL
		.set($gnavNews,{backgroundPosition:'0 -400px'})//1
		.set($gnavNews,{backgroundPosition:'0 -500px'},'+=0.075')//2
		.set($gnavNews,{backgroundPosition:'0 -600px'},'+=0.075')//3
		.set($gnavNews,{backgroundPosition:'0 -700px'},'+=0.075')//4
		.set($gnavNews,{backgroundPosition:'0 -800px'},'+=0.075')//5
		.set($gnavNews,{backgroundPosition:'0 -900px'},'+=0.075')//6
		.set($gnavNews,{backgroundPosition:'0 -1000px'},'+=0.075')//7
		.set($gnavNews,{backgroundPosition:'0 -1100px'},'+=0.075')//8
		.set($gnavNews,{backgroundPosition:'0 -1200px'},'+=0.075')//9
		.set($gnavNews,{backgroundPosition:'0 -400px'},'+=0.075');//1

	gnavNewsRevTL
		.set($gnavNews,{backgroundPosition:'0 -400px'})//0
		.set($gnavNews,{backgroundPosition:'0 -300px'},'+=0.1')//01
		.set($gnavNews,{backgroundPosition:'0 -100px'},'+=0.1')//02
		.set($gnavNews,{backgroundPosition:'0 0'},'+=0.1');//1

	//About
	var gnavAboutHoverTL = new TimelineMax({
		paused:true,onComplete:function(){
			gnavAboutLoopTL.play(0);
		}
	});
	var gnavAboutLoopTL = new TimelineMax({paused:true,repeat:-1});
	var gnavAboutRevTL = new TimelineMax({paused:true});

	gnavAboutHoverTL
		.set($gnavAbout,{backgroundPosition:'0 0'})//0
		.set($gnavAbout,{backgroundPosition:'0 -100px'},'+=0.1')//01
		.set($gnavAbout,{backgroundPosition:'0 -200px'},'+=0.1')//02
		.set($gnavAbout,{backgroundPosition:'0 -400px'},'+=0.1');//1

	gnavAboutLoopTL
		.set($gnavAbout,{backgroundPosition:'0 -400px'})//1
		.set($gnavAbout,{backgroundPosition:'0 -500px'},'+=0.075')//2
		.set($gnavAbout,{backgroundPosition:'0 -600px'},'+=0.075')//3
		.set($gnavAbout,{backgroundPosition:'0 -700px'},'+=0.075')//4
		.set($gnavAbout,{backgroundPosition:'0 -800px'},'+=0.075')//5
		.set($gnavAbout,{backgroundPosition:'0 -900px'},'+=0.075')//6
		.set($gnavAbout,{backgroundPosition:'0 -1000px'},'+=0.075')//7
		.set($gnavAbout,{backgroundPosition:'0 -1100px'},'+=0.075')//8
		.set($gnavAbout,{backgroundPosition:'0 -1200px'},'+=0.075')//9
		.set($gnavAbout,{backgroundPosition:'0 -1300px'},'+=0.075')//10
		.set($gnavAbout,{backgroundPosition:'0 -1400px'},'+=0.075')//11
		.set($gnavAbout,{backgroundPosition:'0 -1500px'},'+=0.075')//12
		.set($gnavAbout,{backgroundPosition:'0 -400px'},'+=0.075');//1

	gnavAboutRevTL
		.set($gnavAbout,{backgroundPosition:'0 -400px'})//0
		.set($gnavAbout,{backgroundPosition:'0 -300px'},'+=0.1')//01
		.set($gnavAbout,{backgroundPosition:'0 -100px'},'+=0.1')//02
		.set($gnavAbout,{backgroundPosition:'0 0'},'+=0.1');//1


	//Works
	var gnavWorksHoverTL = new TimelineMax({
		paused:true,onComplete:function(){
			gnavWorksLoopTL.play(0);
		}
	});
	var gnavWorksLoopTL = new TimelineMax({paused:true,repeat:-1});
	var gnavWorksRevTL = new TimelineMax({paused:true});

	gnavWorksHoverTL
		.set($gnavWorks,{backgroundPosition:'0 0'})//0
		.set($gnavWorks,{backgroundPosition:'0 -100px'},'+=0.1')//01
		.set($gnavWorks,{backgroundPosition:'0 -200px'},'+=0.1')//02
		.set($gnavWorks,{backgroundPosition:'0 -400px'},'+=0.1');//1

	gnavWorksLoopTL
		.set($gnavWorks,{backgroundPosition:'0 -400px'})//1
		.set($gnavWorks,{backgroundPosition:'0 -500px'},'+=0.075')//2
		.set($gnavWorks,{backgroundPosition:'0 -600px'},'+=0.075')//3
		.set($gnavWorks,{backgroundPosition:'0 -700px'},'+=0.075')//4
		.set($gnavWorks,{backgroundPosition:'0 -800px'},'+=0.075')//5
		.set($gnavWorks,{backgroundPosition:'0 -900px'},'+=0.075')//6
		.set($gnavWorks,{backgroundPosition:'0 -1000px'},'+=0.075')//7
		.set($gnavWorks,{backgroundPosition:'0 -1100px'},'+=0.075')//8
		.set($gnavWorks,{backgroundPosition:'0 -1200px'},'+=0.075')//9
		.set($gnavWorks,{backgroundPosition:'0 -1300px'},'+=0.075')//10
		.set($gnavWorks,{backgroundPosition:'0 -1400px'},'+=0.075')//11
		.set($gnavWorks,{backgroundPosition:'0 -1500px'},'+=0.075')//12
		.set($gnavWorks,{backgroundPosition:'0 -400px'},'+=0.075');//1

	gnavWorksRevTL
		.set($gnavWorks,{backgroundPosition:'0 -400px'})//0
		.set($gnavWorks,{backgroundPosition:'0 -300px'},'+=0.1')//01
		.set($gnavWorks,{backgroundPosition:'0 -100px'},'+=0.1')//02
		.set($gnavWorks,{backgroundPosition:'0 0'},'+=0.1');//1



	//Otayori
	var gnavOtayoriHoverTL = new TimelineMax({
		paused:true,onComplete:function(){
			gnavOtayoriLoopTL.play(0);
		}
	});
	var gnavOtayoriLoopTL = new TimelineMax({paused:true,repeat:-1});
	var gnavOtayoriRevTL = new TimelineMax({paused:true});


	gnavOtayoriHoverTL
		.set($gnavOtayori,{backgroundPosition:'0 0'})//0
		.set($gnavOtayori,{backgroundPosition:'0 -100px'},'+=0.1')//01
		.set($gnavOtayori,{backgroundPosition:'0 -200px'},'+=0.1')//02
		.set($gnavOtayori,{backgroundPosition:'0 -400px'},'+=0.1');//1

	gnavOtayoriLoopTL
		.set($gnavOtayori,{backgroundPosition:'0 -400px'})//1
		.set($gnavOtayori,{backgroundPosition:'0 -500px'},'+=0.075')//2
		.set($gnavOtayori,{backgroundPosition:'0 -600px'},'+=0.075')//3
		.set($gnavOtayori,{backgroundPosition:'0 -700px'},'+=0.075')//4
		.set($gnavOtayori,{backgroundPosition:'0 -800px'},'+=0.075')//5
		.set($gnavOtayori,{backgroundPosition:'0 -900px'},'+=0.075')//6
		.set($gnavOtayori,{backgroundPosition:'0 -1000px'},'+=0.075')//7
		.set($gnavOtayori,{backgroundPosition:'0 -1100px'},'+=0.075')//8
		.set($gnavOtayori,{backgroundPosition:'0 -1200px'},'+=0.075')//9
		.set($gnavOtayori,{backgroundPosition:'0 -1300px'},'+=0.075')//10
		.set($gnavOtayori,{backgroundPosition:'0 -1400px'},'+=0.075')//11
		.set($gnavOtayori,{backgroundPosition:'0 -400px'},'+=0.075');//1

	gnavOtayoriRevTL
		.set($gnavOtayori,{backgroundPosition:'0 -400px'})//0
		.set($gnavOtayori,{backgroundPosition:'0 -300px'},'+=0.1')//01
		.set($gnavOtayori,{backgroundPosition:'0 -100px'},'+=0.1')//02
		.set($gnavOtayori,{backgroundPosition:'0 0'},'+=0.1');//1



	//Blog
	var gnavBlogHoverTL = new TimelineMax({
		paused:true,onComplete:function(){
			gnavBlogLoopTL.play(0);
		}
	});
	var gnavBlogLoopTL = new TimelineMax({paused:true,repeat:-1});
	var gnavBlogRevTL = new TimelineMax({paused:true});

	gnavBlogHoverTL
		.set($gnavBlog,{backgroundPosition:'0 0'})//0
		.set($gnavBlog,{backgroundPosition:'0 -100px'},'+=0.1')//01
		.set($gnavBlog,{backgroundPosition:'0 -200px'},'+=0.1')//02
		.set($gnavBlog,{backgroundPosition:'0 -400px'},'+=0.1');//1

	gnavBlogLoopTL
		.set($gnavBlog,{backgroundPosition:'0 -400px'})//1
		.set($gnavBlog,{backgroundPosition:'0 -500px'},'+=0.075')//2
		.set($gnavBlog,{backgroundPosition:'0 -600px'},'+=0.075')//3
		.set($gnavBlog,{backgroundPosition:'0 -700px'},'+=0.075')//4
		.set($gnavBlog,{backgroundPosition:'0 -800px'},'+=0.075')//5
		.set($gnavBlog,{backgroundPosition:'0 -900px'},'+=0.075')//6
		.set($gnavBlog,{backgroundPosition:'0 -1000px'},'+=0.075')//7
		.set($gnavBlog,{backgroundPosition:'0 -1100px'},'+=0.075')//8
		.set($gnavBlog,{backgroundPosition:'0 -1200px'},'+=0.075')//9
		.set($gnavBlog,{backgroundPosition:'0 -400px'},'+=0.075');//1

	gnavBlogRevTL
		.set($gnavBlog,{backgroundPosition:'0 -400px'})//0
		.set($gnavBlog,{backgroundPosition:'0 -300px'},'+=0.1')//01
		.set($gnavBlog,{backgroundPosition:'0 -100px'},'+=0.1')//02
		.set($gnavBlog,{backgroundPosition:'0 0'},'+=0.1');//1


	//mono goen
	var gnavMonoHoverTL = new TimelineMax({
		paused:true,onComplete:function(){
			gnavMonoLoopTL.play(0);
		}
	});
	var gnavMonoLoopTL = new TimelineMax({paused:true,repeat:-1});
	var gnavMonoRevTL = new TimelineMax({paused:true});

	gnavMonoHoverTL
		.set($gnavMono,{backgroundPosition:'0 0'})//0
		.set($gnavMono,{backgroundPosition:'0 -100px'},'+=0.1')//01
		.set($gnavMono,{backgroundPosition:'0 -200px'},'+=0.1')//02
		.set($gnavMono,{backgroundPosition:'0 -400px'},'+=0.1');//1

	gnavMonoLoopTL
		.set($gnavMono,{backgroundPosition:'0 -400px'})//1
		.set($gnavMono,{backgroundPosition:'0 -500px'},'+=0.075')//2
		.set($gnavMono,{backgroundPosition:'0 -600px'},'+=0.075')//3
		.set($gnavMono,{backgroundPosition:'0 -700px'},'+=0.075')//4
		.set($gnavMono,{backgroundPosition:'0 -800px'},'+=0.075')//5
		.set($gnavMono,{backgroundPosition:'0 -900px'},'+=0.075')//6
		.set($gnavMono,{backgroundPosition:'0 -1000px'},'+=0.075')//7
		.set($gnavMono,{backgroundPosition:'0 -1100px'},'+=0.075')//8
		.set($gnavMono,{backgroundPosition:'0 -1200px'},'+=0.075')//9
		.set($gnavMono,{backgroundPosition:'0 -1300px'},'+=0.075')//10
		.set($gnavMono,{backgroundPosition:'0 -1400px'},'+=0.075')//11
		.set($gnavMono,{backgroundPosition:'0 -1500px'},'+=0.075')//12
		.set($gnavMono,{backgroundPosition:'0 -1600px'},'+=0.075')//13
		.set($gnavMono,{backgroundPosition:'0 -1700px'},'+=0.075')//14
		.set($gnavMono,{backgroundPosition:'0 -1800px'},'+=0.075')//15
		.set($gnavMono,{backgroundPosition:'0 -1900px'},'+=0.075')//16
		.set($gnavMono,{backgroundPosition:'0 -2000px'},'+=0.075')//17
		.set($gnavMono,{backgroundPosition:'0 -2100px'},'+=0.075')//18
		.set($gnavMono,{backgroundPosition:'0 -400px'},'+=0.075');//1

	gnavMonoRevTL
		.set($gnavMono,{backgroundPosition:'0 -400px'})//0
		.set($gnavMono,{backgroundPosition:'0 -300px'},'+=0.1')//01
		.set($gnavMono,{backgroundPosition:'0 -100px'},'+=0.1')//02
		.set($gnavMono,{backgroundPosition:'0 0'},'+=0.1');//1



	//When Smartphone
	//////////////////////////////
	enquire.register('screen and (max-width: 767px)',{
		match:function(){
		},
		unmatch:function(){
			//OffcanvasMenu Close
			$container.removeClass('nav-open').removeAttr('style');
			$gnav.removeAttr('style');
		}
	});

	//When PC
	//////////////////////////////
	enquire.register('screen and (min-width: 768px)',{
		match:function(){

			if(!ua.isTablet){
				//GROBAL NEWS
				$gnavNews.on({
					'mouseenter.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavNewsLoopTL.pause();
							gnavNewsRevTL.pause();
							gnavNewsHoverTL.play(0);
						}
					},
					'mouseleave.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavNewsLoopTL.pause();
							gnavNewsHoverTL.pause();
							gnavNewsRevTL.play(0);
						}
					}
				});

				//GROBAL About
				$gnavAbout.on({
					'mouseenter.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavAboutLoopTL.pause();
							gnavAboutRevTL.pause();
							gnavAboutHoverTL.play(0);
						}
					},
					'mouseleave.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavAboutLoopTL.pause();
							gnavAboutHoverTL.pause();
							gnavAboutRevTL.play(0);
						}
					}
				});

				//GROBAL Works
				$gnavWorks.on({
					'mouseenter.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavWorksLoopTL.pause();
							gnavWorksRevTL.pause();
							gnavWorksHoverTL.play(0);
						}
					},
					'mouseleave.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavWorksLoopTL.pause();
							gnavWorksHoverTL.pause();
							gnavWorksRevTL.play(0);
						}
					}
				});


				//GROBAL Otayori
				$gnavOtayori.on({
					'mouseenter.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavOtayoriLoopTL.pause();
							gnavOtayoriRevTL.pause();
							gnavOtayoriHoverTL.play(0);
						}
					},
					'mouseleave.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavOtayoriLoopTL.pause();
							gnavOtayoriHoverTL.pause();
							gnavOtayoriRevTL.play(0);
						}
					}
				});

				//GROBAL Blog
				$gnavBlog.on({
					'mouseenter.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavBlogLoopTL.pause();
							gnavBlogRevTL.pause();
							gnavBlogHoverTL.play(0);
						}
					},
					'mouseleave.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavBlogLoopTL.pause();
							gnavBlogHoverTL.pause();
							gnavBlogRevTL.play(0);
						}
					}
				});

				//GROBAL monogoen
				$gnavMono.on({
					'mouseenter.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavMonoLoopTL.pause();
							gnavMonoRevTL.pause();
							gnavMonoHoverTL.play(0);
						}
					},
					'mouseleave.pc':function(){
						if(!$(this).parent().hasClass('is-current')){
							gnavMonoLoopTL.pause();
							gnavMonoHoverTL.pause();
							gnavMonoRevTL.play(0);
						}
					}
				});
			}

		},
		unmatch:function(){
			$gnavNews.off('.pc');
			$gnavAbout.off('.pc');
			$gnavWorks.off('.pc');
			$gnavOtayori.off('.pc');
			$gnavBlog.off('.pc');
			$gnavMono.off('.pc');
		}
	});





});

})(jQuery);
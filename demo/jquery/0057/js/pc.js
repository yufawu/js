
		$(document).ready(function(){

			function myfunction(li,li_a,menu_tab){
				li.click(function(){
				var index=$(this).index();
				menu_tab.eq(index).addClass("active").siblings().removeClass("active");
				li_a.removeClass("selected");
				li_a.eq(index).addClass("selected").siblings().removeClass("selected");
				
			});
			}

			myfunction($(".container .menu .ulmenu1 li"),$(".container .ulmenu1 li a"),$(".container .content .menu1 .tab"));
			myfunction($(".container .menu .ulmenu2 li"),$(".container .ulmenu2 li a"),$(".container .content .menu2 .tab"));
			myfunction($(".container .menu .ulmenu3 li"),$(".container .ulmenu3 li a"),$(".container .content .menu3 .tab"));




			$(function(){            //ul/li的折叠效果
				$(".menu > ul").eq(0).show();
				 $(".menu h3").click(function(){
				 		//找menu对应的tab
				 		$(".menu_tab > div").removeClass("active");

				 		var val=($(this).next().attr('class'));
				 		var menu_value=(val.substring(val.length-1));
				 		$(".container .content .menu"+menu_value+" .tab:first-child").addClass("active");
				 		$(".container .menu .ulmenu"+menu_value+" li>a").removeClass("selected");
				 		$(".container .menu .ulmenu"+menu_value+" li a").eq(0).addClass("selected");//默认设置为被选中状态




				 			//这是ul收缩效果
				            $(this).next().stop().slideToggle();
				            $(this).siblings().next("ul").stop().slideUp();


			            });

			});
			
			$(function(){   // 导航 >
				 //$(".container .menu > h3").click(function(){
                 //
				 //	$(".container .content .A1").empty().text($(this).text());
                 //
				 //});

				$(".ulmenu > li").click(function(){

					$(".container .content .A1").empty().text($(this).text());

				});

			});

			window.onload=function(){
				$("#shouye").click();

			}




		});




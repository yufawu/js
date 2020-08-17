$(function(){
    var v_width= $(document.body).width();
    $(".select_textul").width(v_width);
    
    $(".select_textdiv").click(function(){
		$(this).parent().parent().siblings().find(".select_textul").hide();
    	$(".select_textdiv").removeClass("divfocus");
    	$(this).addClass("divfocus");
    	$(this).siblings(".select_textul").fadeToggle(500);
        var lilength = $(this).siblings(".select_textul").find("li.focus").has(".select_second_ul").length;
    	if(lilength > 0){
    		$(this).siblings(".select_textul").find("li.focus>.select_second_ul").show();
    	}else{
    		$(".select_first_ul>li>p").css("width","100%");
    	}
    })
	$(".select_first_ul>li>p").click(function(){
		$(".select_second_ul").hide();
		$(this).parent("li").addClass("focus").siblings("li").removeClass("focus");
		var ynul = $(this).parent("li").has(".select_second_ul").length;
        if(ynul == 0){
        	
        	var choose = $(this).text();
			$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(choose);
			$(this).parents(".select_textul").siblings("input").val(choose);
			$(this).parents(".select_textul").fadeOut(300);
        }else{
        	$(".select_second_ul").hide();
		    $(this).siblings(".select_second_ul").show();
		    event.stopPropagation();
			chooseclick();
        }
		
	});
	
	chooseclick();
	function chooseclick(){
		$(".select_second_ul>li").click(function(){
			var choose = $(this).text();
			$(this).addClass("focusli").siblings("li").removeClass("focusli");
			$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(choose);
			$(this).parents(".select_textul").siblings("input").val(choose);
			$(this).parents(".select_textul").fadeOut(300);
			
			event.stopPropagation();
		});
	}
		
})

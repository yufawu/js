;(function ($) {

	var methods = {
		getData: function () {
			var ids=[];
			$("#select2 option").each(function(){
				ids.push($(this).val());
			});
			return ids;
		}
	};
	
	$.fn.zbMulSelect = function (options) {
    	
    	if (methods[options]) {
			return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof options === 'object' || !options) {
			
			var $this = $(this);
			
	    	var defaults = {
		        data: ''
		    };
		    
	        var opts = $.extend(defaults, options);
	        
			return this.each(function () {

	            initLeftView(opts.data);
	            $("#leftChoice1").click(function(){
					setLeftSub();
				});
	            $("#leftChoice1").change(function(){
					changeLeftTop();
				});
	            $("#rightChoice1").click(function(){
					setRightSub();
				});
				$("#rightChoice1").change(function(){
					changeRightTop();
				});
	            $("#addtoR").click(function(){
					$("#select1 option:selected").appendTo($("#select2"));
				});
				$("#removeL").click(function(){
					$("#select2 option:selected").appendTo($("#select1"));
				});
				$("#searchLeft").click(function(){
					var topT=$("#leftChoice1 option:selected").val();
					var subT=$("#leftChoice2 option:selected").val();
					
					if(topT!="0"&&subT=="0"){
						$("#select1 option").each(function(){
							if(topT==$(this).attr("data-top")){
								$(this).css("display","block");
							}else{
								$(this).css("display","none");
							}
						});
					}
					if(topT=="0"&&subT!="0"){
						$("#select1 option").each(function(){
							if(subT==$(this).attr("data-sub")){
								$(this).css("display","block");
							}else{
								$(this).css("display","none");
							}
						});
					}
					if(topT!="0"&&subT!="0"){
						$("#select1 option").each(function(){
							if(topT==$(this).attr("data-top")&&subT==$(this).attr("data-sub")){
								$(this).css("display","block");
							}else{
								$(this).css("display","none");
							}
						});
					}
					if(topT=="0"&&subT=="0"){
						$("#select1 option").each(function(){
							$(this).css("display","block");
						});
					}
				});
				$("#searchRight").click(function(){
					var topT=$("#rightChoice1 option:selected").val();
					var subT=$("#rightChoice2 option:selected").val();
					if(topT!="0"&&subT=="0"){
						$("#select2 option").each(function(){
							if(topT==$(this).attr("data-top")){
								$(this).css("display","block");
							}else{
								$(this).css("display","none");
							}
						});
					}
					if(topT=="0"&&subT!="0"){
						$("#select2 option").each(function(){
							if(subT==$(this).attr("data-sub")){
								$(this).css("display","block");
							}else{
								$(this).css("display","none");
							}
						});
					}
					if(topT!="0"&&subT!="0"){
						$("#select2 option").each(function(){
							if(topT==$(this).attr("data-top")&&subT==$(this).attr("data-sub")){
								$(this).css("display","block");
							}else{
								$(this).css("display","none");
							}
						});
					}
					if(topT=="0"&&subT=="0"){
						$("#select2 option").each(function(){
							$(this).css("display","block");
						});
					}
				});
	        });
		} else {
			$.error('Method ' + options + ' does not exist on jQuery.MyTest');
		}
    }
	
	var initLeftView = function (obj) {
        var arr=[];
		var arrType1=[];
		var arrType2=[];
		$.each(obj, function(i1,item1) {
			var Toptype=item1.name;
			$.each(item1.value, function(i2,item2) {
				var Subtype=item2.name;
				$.each(item2.value, function(i3,item3) {
					arr.push("<option data-top='"+Toptype+"' data-sub='"+Subtype+"' value='"+item3.id+"' style='display:block' >"+item3.name+"</option>");
				});
				arrType2.push("<option data-p='"+Toptype+"' style='display:none;' value='"+Subtype+"'>"+Subtype+"</option>");
			});
			arrType1.push("<option value='"+Toptype+"'>"+Toptype+"</option>");
		});
		$("#select1").append(arr.join(""));
		$("#leftChoice1").append(arrType1.join(""));
		$("#leftChoice2").append(arrType2.join(""));
		$("#rightChoice1").append(arrType1.join(""));
		$("#rightChoice2").append(arrType2.join(""));
    }
    
    var setLeftSub = function(){
    	var va = $("#leftChoice1 option:selected").val();
		$("#leftChoice2 option").not("#initLeft").each(function(){
			if(va==$(this).attr("data-p")){
				$(this).css("display","block");
			}else{
				$(this).css("display","none");
			}
		});
    }
    
    var setRightSub = function (){
		var va = $("#rightChoice1 option:selected").val();
		$("#rightChoice2 option").not("#initRight").each(function(){
			if(va==$(this).attr("data-p")){
				$(this).css("display","block");
			}else{
				$(this).css("display","none");
			}
		});
	}
	
	var changeLeftTop = function(){
		$("#leftChoice2 option[value='0']").prop("selected",true);
	}
	
	 var changeRightTop = function(){
	 	$("#rightChoice2 option[value='0']").prop("selected",true);
	}
	
	var RightAlltoLeft = function(){
		$("#select2 option").appendTo($("#select2"));
	}
	
})(jQuery);
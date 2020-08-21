$(function () {
    var _move=false;
    var _x,_y;
    var _semove=false;

    var _move2=false;
    var _x2,_y2;
    var _semove2=false;

    var _move3=false;
    var _x3,_y3;
    var _semove3=false;

    $(".pieceImgBox1").mousedown(function(e){
        _move=true;
        _x=e.pageX-parseInt($(".pieceImgBox1").css("left"));
        _y=e.pageY-parseInt($(".pieceImgBox1").css("top"));
    });
    $(".pieceImgBox2").mousedown(function(e){
        _move2=true;
        _x2=e.pageX-parseInt($(".pieceImgBox2").css("left"));
        _y2=e.pageY-parseInt($(".pieceImgBox2").css("top"));
    });
    $(".pieceImgBox3").mousedown(function(e){
        _move3=true;
        _x3=e.pageX-parseInt($(".pieceImgBox3").css("left"));
        _y3=e.pageY-parseInt($(".pieceImgBox3").css("top"));
    });

    $(document).mousemove(function(e){
        if(_move){
            var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
            var y=e.pageY-_y;
            $(".pieceImgBox1").css({top:y,left:x});//控件新位置
        }
        if(_semove){
            var left=parseInt($(".pieceImgBox1").css("left"));
            $(".pieceImgBox1").css({width:e.pageX-20-left,height:(e.pageX-20-left)*3});
        }

        if(_move2){
            var x2=e.pageX-_x2;
            var y2=e.pageY-_y2;
            $(".pieceImgBox2").css({top:y2,left:x2});
        }
        if(_semove2){
            var left=parseInt($(".pieceImgBox2").css("left"));
            $(".pieceImgBox2").css({width:e.pageX-20-left,height:(e.pageX-20-left)*3});
        }

        if(_move3){
            var x3=e.pageX-_x3;
            var y3=e.pageY-_y3;
            $(".pieceImgBox3").css({top:y3,left:x3});
        }
        if(_semove3){
            var left=parseInt($(".pieceImgBox3").css("left"));
            $(".pieceImgBox3").css({width:e.pageX-20-left,height:(e.pageX-20-left)*3});
        }
    }).mouseup(function(){
        _move=false;
        _semove=false;
        _move2=false;
        _semove2=false;
        _move3=false;
        _semove3=false;
    });

    $(".pieceImgBox1 .se").mousedown(function(e){
        e.stopPropagation();
        _semove=true;
    });
    $(".pieceImgBox2 .se").mousedown(function(e){
        e.stopPropagation();
        _semove2=true;
    });
    $(".pieceImgBox3 .se").mousedown(function(e){
        e.stopPropagation();
        _semove3=true;
    });

    //合成图片
    $(document).on('click','.imgBtn',function () {
        var img1Width;
        var img1Height;
        var img2Width;
        var img2Height;
        var img3Width;
        var img3Height;
        var bgimgWidth;
        var bgimgHeight;
        var w1,h1,l1,t1,w2,h2,l2,t2,w3,h3,l3,t3,wBg,hBg;
        var img1=$('#pieceTargetImg1').attr('src');
        var img2=$('#pieceTargetImg2').attr('src');
        var img3=$('#pieceTargetImg3').attr('src');
        var bgimg=$('#backgroundImg').attr('src');
        if(bgimg!=undefined){
            bgimgWidth = document.getElementById('backgroundImg').naturalWidth;
            bgimgHeight = document.getElementById('backgroundImg').naturalHeight;
        }
        if(img1!=undefined){
            img1Width = document.getElementById('pieceTargetImg1').naturalWidth;
            img1Height = document.getElementById('pieceTargetImg1').naturalHeight;
            w1=$('.pieceImgBox1').width();
            h1=$('.pieceImgBox1').height();
            l1=$('.pieceImgBox1').css('left');
            t1=$('.pieceImgBox1').css('top');
            l1=l1.split('px');
            l1=l1[0];
            t1=t1.split('px');
            t1=t1[0];
        }
        if(img2!=undefined){
            img2Width = document.getElementById('pieceTargetImg2').naturalWidth;
            img2Height = document.getElementById('pieceTargetImg2').naturalHeight;
            w2=$('.pieceImgBox2').width();
            h2=$('.pieceImgBox2').height();
            l2=$('.pieceImgBox2').css('left');
            t2=$('.pieceImgBox2').css('top');
            l2=l2.split('px');
            l2=l2[0];
            t2=t2.split('px');
            t2=t2[0];
        }
        if(img3!=undefined){
            img3Width = document.getElementById('pieceTargetImg3').naturalWidth;
            img3Height = document.getElementById('pieceTargetImg3').naturalHeight;
            w3=$('.pieceImgBox3').width();
            h3=$('.pieceImgBox3').height();
            l3=$('.pieceImgBox3').css('left');
            t3=$('.pieceImgBox3').css('top');
            l3=l3.split('px');
            l3=l3[0];
            t3=t3.split('px');
            t3=t3[0];
        }
        var img1 = new Image();
        img1.src = $('#pieceTargetImg1').attr('src');
        var img2 = new Image();
        img2.src = $('#pieceTargetImg2').attr('src');
        var img3 = new Image();
        img3.src = $('#pieceTargetImg3').attr('src');
        var bgimg= new Image();
        bgimg.src = $('#backgroundImg').attr('src');
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');
        var base64;
        if(img1!=undefined && img2!=undefined && img3!=undefined){
            var w=$('.head').width();
            var h=$('.head').height();
            canvas.width = w;
            canvas.height = h;
            if(bgimgWidth>bgimgHeight){
                bgimgWidth=bgimgHeight;
            }
            else{
                bgimgHeight=bgimgWidth;
            }
            ctx.drawImage(bgimg, 0, 0, bgimgWidth, bgimgHeight,0,0,w,h);
            ctx.drawImage(img1, 0, 0, img1Width, img1Height,l1,t1,w1,h1);
            ctx.drawImage(img2, 0, 0, img2Width, img2Height,l2,t2,w2,h2);
            ctx.drawImage(img3, 0, 0, img3Width, img3Height,l3,t3,w3,h3);
            base64 = canvas.toDataURL('image/jpeg', 1);
            console.log(base64);
			$("#jg").attr("src",base64);
        }
    });



    //上传图片
    $(document).on('click','.pieceImgModel .upImg1',function () {
        openBrowseImg1()
    });

    $(document).on('change','.pieceImgModel #pieceFileImg1',function(){
        changeFileImg1()
    });
    $(document).on('click','.pieceImgModel .upImg2',function () {
        openBrowseImg2()
    });

    $(document).on('change','.pieceImgModel #pieceFileImg2',function(){
        changeFileImg2()
    });
    $(document).on('click','.pieceImgModel .upImg3',function () {
        openBrowseImg3()
    });
    $(document).on('change','.pieceImgModel #pieceFileImg3',function(){
        changeFileImg3()
    });

    //上传背景图
    $(document).on('click','.upImg',function () {
        openBrowseImg()
    });

    $(document).on('change','#pieceFileImg',function(){
        changeFileImg()
    });

    function getFileUrlImg(sourceId) {
        var url;
        if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
            url = document.getElementById(sourceId).value;
        } else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        } else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        } else if(navigator.userAgent.indexOf("Safari")>0) { // Chrome
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        }
        return url;
    }
    function openBrowseImg1(){
        var ie=navigator.appName=="Microsoft Internet Explorer" ? true : false;
        if(ie){
            document.getElementById("pieceFileImg1").click();
        }else{
            var a=document.createEvent("MouseEvents");
            a.initEvent("click", true, true);
            document.getElementById("pieceFileImg1").dispatchEvent(a);
        }
    }
    function openBrowseImg2(){
        var ie=navigator.appName=="Microsoft Internet Explorer" ? true : false;
        if(ie){
            document.getElementById("pieceFileImg2").click();
        }else{
            var a=document.createEvent("MouseEvents");
            a.initEvent("click", true, true);
            document.getElementById("pieceFileImg2").dispatchEvent(a);
        }
    }
    function openBrowseImg3(){
        var ie=navigator.appName=="Microsoft Internet Explorer" ? true : false;
        if(ie){
            document.getElementById("pieceFileImg3").click();
        }else{
            var a=document.createEvent("MouseEvents");
            a.initEvent("click", true, true);
            document.getElementById("pieceFileImg3").dispatchEvent(a);
        }
    }
    function openBrowseImg(){
        var ie=navigator.appName=="Microsoft Internet Explorer" ? true : false;
        if(ie){
            document.getElementById("pieceFileImg").click();
        }else{
            var a=document.createEvent("MouseEvents");
            a.initEvent("click", true, true);
            document.getElementById("pieceFileImg").dispatchEvent(a);
        }
    }

    function changeFileImg() {
        var url = getFileUrlImg("pieceFileImg");
        $('#backgroundImg').attr('src',url);
        $('.head').css({
            'background':'url('+url+')',
            'background-size':'cover'
        });
        return false;
    }

    function changeFileImg1() {
        var url = getFileUrlImg("pieceFileImg1");
        $('#pieceTargetImg1').attr('src',url);
        $('.pieceImgBox1').css({
            'background':'url('+url+')',
            'background-size':'cover'
        });
        $('.pieceImgBox1 .se').css({'display':'block'});
        return false;
    }
    function changeFileImg2() {
        var url = getFileUrlImg("pieceFileImg2");
        $('#pieceTargetImg2').attr('src',url);
        $('.pieceImgBox2').css({
            'background':'url('+url+')',
            'background-size':'cover'
        });
        $('.pieceImgBox2 .se').css({'display':'block'});
        return false;
    }
    function changeFileImg3() {
        var url = getFileUrlImg("pieceFileImg3");
        $('#pieceTargetImg3').attr('src',url);
        $('.pieceImgBox3').css({
            'background':'url('+url+')',
            'background-size':'cover'
        });
        $('.pieceImgBox3 .se').css({'display':'block'});
        return false;
    }

});

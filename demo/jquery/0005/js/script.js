

/* 导航条 */
$(function () {

   $('.sidenav').find('label').click(function(){
      $('.sidenav').children('.side').slideToggle();
   })

   //PC端鼠标浮动展示子导航
   $(".nav>ul>li").each(function () {

      //设置每个li的长度
      var $length = $('.nav ul li').length
      var $li =$('.nav ul').children('li');
      var $lilgh = 100 / $length ;
      $li.outerWidth($lilgh + '%')

      //如果没有子目录，则删除包含子目录的div
      if ($(this).children('.s_navbox').children('.s_a').find('a').length<1) {
         $(this).children('.s_navbox').remove()
      }

      //设置伸缩和展开的样式
      else{
         $(this).mouseover(
            function (){
               $(this).children('').next('.s_navbox').stop(true, true).delay(100).slideDown(200);
            })
         $(this).mouseleave(
            function (){$(this).children('').next('.s_navbox').stop(true, true).delay(100).slideUp(100);})
      }
   });

   //点击逐渐展开移动端导航
   $(".a_js").click(
       function () {
           $(".m_nav").stop(true, false).delay(0).animate({
               width: "100%",
               height: "100%"
           }, 0);
           $(".m_nav").find(".closecover").stop(true, false).delay(0).animate({
               opacity: "0.9"
           }, 300);
           $(".m_nav").find(".closeicon").stop(true, false).delay(0).animate({
               opacity: "1"
           }, 300);
           $(".m_nav").find(".m_navList").stop(true, false).delay(0).animate({
               right: "0"
           }, 300);
           $('body').css('overflow','hidden');
       }
   )

   //点击关闭，逐渐隐藏
   $(".a_closed").click(
       function () {
           $(".m_nav").stop(true, false).delay(300).animate({
               width: "0",
               height: "0"
           }, 0);
           $(".m_nav").find(".closecover").stop(true, false).delay(0).animate({
               opacity: "0"
           }, 300);
           $(".m_nav").find(".closeicon").stop(true, false).delay(0).animate({
               opacity: "0"
           }, 300);
           $(".m_nav").find(".m_navList").stop(true, false).delay(0).animate({
               right: "-80%"
           }, 300);
           $('body').css('overflow','auto');
       }
   )

   //判断是否有子标题
   $('.m_navList ul li').each(function () {
      $(this).children('.m_f_a').find('i').addClass('icon')
      if ($(this).children('.m_s_nav').find('a').length < 1) {
         $(this).children('.m_f_a').children('i').removeClass('icon');
      }
   });

   //点击图标展开关闭子导航
   $('.m_navList ul li').find('.m_f_a i').click(function () {
      $(this).parent().parent().siblings().children('.m_s_nav').slideUp();
      $(this).parent().parent().siblings().children('.m_f_a').find('i').removeClass('icon_on')
      $(this).parent().next().toggle("normal").prev().children('i').toggleClass('icon_on');
   })

});

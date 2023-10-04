$(function(){
  var $win = $(window),
      $cloneNav = $('header').clone().addClass('clone-nav').appendTo('body'),
      showClass = 'is-show';
      var img01_off = $('.logo h1 img').attr('src');
      var img01_on = img01_off.replace('logo2','logo');
      var img02_off = $('.gNav .tel_wrap img').attr('src');
      var img02_on = img02_off.replace('tel02','tel01');
      var img03_off = $('.s_contact img').attr('src');
      var img03_on = img03_off.replace('contact_white','contact_blue');
      $win.on('load scroll', function() {
       if ($(window).scrollTop() > $(window).height()) {
          $cloneNav.addClass(showClass);
          $('.is-show .gNav_item .gNav_sub').css("visibility","");
          $('.logo h1 img').attr('src',img01_on);
          $('.gNav .tel_wrap img').attr('src',img02_on);
          $('.s_contact img').attr('src',img03_on);
        } else {
          $cloneNav.removeClass(showClass);
          $('.clone-nav .gNav_item:hover .gNav_sub').css("visibility","hidden");
          $('.logo h1 img').attr('src',img01_off);
          $('.gNav .tel_wrap img').attr('src',img02_off);
          $('.s_contact img').attr('src',img03_off);
        }
   });
 });
  $(function(){
    $('.exampleslider').slick({
      infinite: true,
      autoplay:true,
      autoplaySpeed:3000,
      centerMode: true,
      prevArrow:false,
      nextArrow:false,
      variableWidth:true,
      slidesToShow: 4
    });
  });
 if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
    $('body').on("mousewheel", function () {
      event.preventDefault();
      var wd = event.wheelDelta;
      var csp = window.pageYOffset;
      window.scrollTo(0, csp - wd);
    });
 }

  $('.example_wrap').waypoint(function(direction){
    var activePoint = $(this.element);
    if (direction === 'down') {//scroll down
      activePoint.addClass('move_fade');
      setTimeout(function(){
        $('.example_wrap .ih').addClass('move_fade');
      },200);
      setTimeout(function(){
        $('.example_wrap .ttl01').addClass('move_fade');
      },300);
      setTimeout(function(){
        $('.example_wrap .exam_txt01').addClass('move_fade');
      },500);
      setTimeout(function(){
        $('.example_wrap .example_slider_wrap').addClass('move_fade');
      },900);
    }
  },{offset : '75%'});

$('.about').waypoint(function(direction){
   var activePoint = $(this.element);
   if (direction === 'down') {//scroll down
       activePoint.addClass('move_fade');
       setTimeout(function(){
         $('.about .ih').addClass('move_fade');
       },200);
       setTimeout(function(){
         $('.about .ttl01').addClass('move_fade');
       },300);
       setTimeout(function(){
         $('.about .about_l_txt').addClass('move_fade');
       },400);
       setTimeout(function(){
         $('.about .r').addClass('move_fade');
       },550);
       setTimeout(function(){
         $('.about .btn01_wrap').addClass('move_fade');
       },700);
   }
},{offset : '75%'});

$('.info').waypoint(function(direction){
   var activePoint = $(this.element);
   if (direction === 'down') {//scroll down
       activePoint.addClass('move_fade');
       setTimeout(function(){
         $('.info li:nth-of-type(1)').addClass('move_fade');
       },200);
       setTimeout(function(){
         $('.info li:nth-of-type(2)').addClass('move_fade');
       },400);
   }
},{offset : '75%'});

$('.tdc_wrap').waypoint(function(direction){
   var activePoint = $(this.element);
   if (direction === 'down') {//scroll down
       activePoint.addClass('move_fade');
       setTimeout(function(){
         $('.tdc_wrap .ih').addClass('move_fade');
       },200);
       setTimeout(function(){
         $('.tdc_wrap h3').addClass('move_fade');
       },300);
       setTimeout(function(){
         $('.tdc_wrap .r').addClass('move_fade');
       },550);
       setTimeout(function(){
         $('.tdc_wrap .btn01_wrap').addClass('move_fade');
       },700);
   }
},{offset : '75%'});

$('.news_content').waypoint(function(direction){
   var activePoint = $(this.element);
   if (direction === 'down') {//scroll down
       activePoint.addClass('move_fade');
       setTimeout(function(){
         $('.news_content .ih').addClass('move_fade');
       },200);
       setTimeout(function(){
         $('.news_content h3').addClass('move_fade');
       },300);
       setTimeout(function(){
         $('.news_content .news_box').addClass('move_fade');
       },550);
   }
},{offset : '75%'});

$(function() {
  var h = $(window).height();
  $('#top_content').css('visible','hidden');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).load(function () {
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#top_content').css('visible', 'true');
});

$(function(){
     jQuery('a[href*="youtube.com/watch"]').magnificPopup({
        type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1'
                     }
                }
            }
      });
 });
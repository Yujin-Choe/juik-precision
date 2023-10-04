$(function(){
	$(".accordionlist .ttl").on('click', function() {
		$(this).next().slideToggle(400);
		if ($(this).children(".accordion_icon").hasClass('active')) {
			$(this).children(".accordion_icon").removeClass('active');
		}
		else {
			$(this).children(".accordion_icon").addClass('active');
		}
	});
});

jQuery(document).ready(function(){
var current_scrollY;
$('.spMenu,.spMenu2').on('click',function(){
  if($('.spMenu,.spMenu2').hasClass("on") || $('.clone-nav .spMenu,.clone-nav .spMenu2').hasClass("on")){
    $('.spMenu,.spMenu2').removeClass("on");
    $( 'body' ).attr( { style: '' } );
    $( 'html, body' ).prop( { scrollTop: current_scrollY } );
    $('.spMenu2').css("display","none");
    $('.content_wrap').css("z-index","1");
    $('.view_m.clone-nav').css("display","block");
    $('.head_t_s .logo,.head_t_s .s_contact,.head_t_s .rwrap').css("display","block");
    $('.head_t_s nav').transition({opacity:0, duration:300}, function() {
    $('.head_t_s nav').css("display","none");
    $('body').removeClass('fixed');
    });
  }else{
    $('.spMenu,.spMenu2').addClass("on");
    current_scrollY = $( window ).scrollTop();
    $( 'body' ).css( {
      position: 'fixed',
      width: '100%',
      top: -1 * current_scrollY
    } );
    $('.head_t_s .logo,.head_t_s .s_contact,.head_t_s .rwrap').css("display","none");
    $('.spMenu2').css("display","block");
    $('.head_t_s nav').css({"display":"block", "opacity":"0"}).transition({opacity:1,duration:300});
    $('body').addClass('fixed');
    $('.view_m.clone-nav').css("display","none");
    $('.content_wrap').css("z-index","-1");
  }
});
});
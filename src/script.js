import $ from 'jquery';

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#header-row").addClass("darkheader");
    }else{
        $("#header-row").removeClass("darkheader");
    }
});
$(document).ready(function(){
    $('.loadingbar').delay(4500).animate({left: '0'}, 5500);
    $('.loadingBox').delay(500).animate({opacity: '1'}, 1000);
    $('.splashupperscreen').delay(9000).animate({top: '-100%', opacity: '0', height: '0%'}, 2000);
    $('.splashlowerscreen').delay(9000).animate({bottom: '-100%', opacity: '0', height: '0%'}, 3000);

    $('.splashScreen').delay(8300).queue(function(){
      $('.splashScreen').addClass("visibleSplash");
      $('.loadingContainer').delay(8000).addClass('splashdone').animate({height: '0px'}, 1000);
      $('body').css({overflow: 'visible'});
      $('header.main-header').addClass("zindex-visible");
    });
});
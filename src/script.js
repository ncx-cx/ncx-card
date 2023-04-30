import $ from 'jquery';

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#header-row").addClass("darkheader");
    }else{
        $("#header-row").removeClass("darkheader");
    }
});
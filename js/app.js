$( document ).ready(function(){
    $('.parallax').parallax();   
})

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('blue-grey').removeClass('transparent');
    }
    else{$('nav').removeClass('blue-grey').addClass('transparent');}
})
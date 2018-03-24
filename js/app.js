$( document ).ready(function(){
    $('.parallax').parallax(); 
})

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('blue-grey darken-2').removeClass('transparent');
    }
    else{$('nav').removeClass('blue-grey darken-2').addClass('transparent');}
})

$( document ).ready(function(){
    $('.parallax').parallax();
    $('.effects').hover(function(){
        $(this).css("color", "#6b90a1");
        $(this).next().css({'background-color':'#6b90a1', 'width':'200px'});
        }, function(){
        $(this).css("color", "#455a64");
        $(this).next().css({'background-color':'#455a64', 'width':'100px', 'transition-duration':'0.6s'});
    });  
})

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('blue-grey darken-2').removeClass('transparent');
    }
    else{$('nav').removeClass('blue-grey darken-2').addClass('transparent');}
})

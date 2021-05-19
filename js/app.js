$( document ).ready(function(){
    $('.parallax').parallax();
    $('.effects').hover(function(){
        $(this).css("color", "#6b90a1");
        $(this).next().css({'background-color':'#6b90a1', 'width':'200px'});
        }, function(){
        $(this).css("color", "#455a64");
        $(this).next().css({'background-color':'#455a64', 'width':'100px', 'transition-duration':'0.6s'});
    });  

    var arrProjects = [
        {image: "assets/images/burger-foto.jpg", title: "BURGER QUEEN", description:"Burger Queen es un app para tomar pedidos. Elaborado con React, Styled-components",
         linkApp:"https://burguer-queen-app-esf.web.app/"},
        {image: "assets/images/swapi.png", title: "SWAPI", description:"Start Wars es una web donde hallarás toda la información de tus personajes favoritos de la saga.",
         linkCodigo:"https://github.com/Eliza29/swapi-1", linkApp:"https://eliza29.github.io/swapi-1/"},
        {image: "assets/images/clima.png", title: "APP ClIMA", description:"App para saber el clima actual y de los siguientes días de una ciudad o país. Usando el api de openweathermap.",
        linkCodigo:"https://github.com/Eliza29/App-del-clima", linkApp:"https://app-pronostico-clima.web.app/"}
        
    ]


    for(var i= 0; i< arrProjects.length; i++){

        var iconos;
        if(arrProjects[i].linkCodigo){
            iconos = `
            <a href=${arrProjects[i].linkApp} class="waves-effect btn blue-grey darken-2" target="_blank"><i class="fas fa-eye fa-lg"></i> Demo</a>                       
            <a href=${arrProjects[i].linkCodigo} class="waves-effect btn right cyan lighten-4 black-text" target="_blank"><i class="fab fa-github-alt fa-lg"></i> Código</a>
        `
        }else{
          iconos=`
          <a href=${arrProjects[i].linkApp} class="waves-effect btn blue-grey darken-2" target="_blank"><i class="fas fa-eye fa-lg"></i> Demo</a>                       
          `
        }

        $('#cardsProjects').append(
            `
                <div class="col s12 m6 l4">
                    <div class="card  hoverable">
                    <div class="card-image">
                        <img src=${arrProjects[i].image}>
                        <span class="card-title">${arrProjects[i].title}</span>
                    </div>
                    <div class="card-content">
                        <p>${arrProjects[i].description}</p>
                    </div>
                    <div class="card-action"> 
                      ${iconos}
                    </div>
                    </div>
                </div>
            `
        )
    }
   

})

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('blue-grey darken-2').removeClass('transparent');
    }
    else{$('nav').removeClass('blue-grey darken-2').addClass('transparent');}
})

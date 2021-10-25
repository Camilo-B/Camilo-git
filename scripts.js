//  damos lectura de el documento  
// creamos las variables y con la funcion guardamos y enseñamos el menu
jQuery('document').ready(function($){

    let menuBtn = $('.menu-icon'),
        menu = $('.header-div--navigation ol');

    menuBtn.click(function() {

        if (menu.hasClass('show')) {

            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
        

    });

});
// Fin de la function
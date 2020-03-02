$('.arrow-left i').click(prevSlide);    //click su freccia sx --> attiva slide a sx
$('.arrow-right i').click(nextSlide);   //click su freccia dx --> ativva slide a dx

//funzione quando slide a sx
function prevSlide() {
    if ( $('.images img.active').hasClass('first') ) {
        $('.images img.active').removeClass('active');
        $('.images img.last').addClass('active');

        //pulsanti Slider
        $('.button i.active').removeClass('active');
        $('.button i.last').addClass('active');

    } else {
        var imgAttiva = $('.images img.active');
        var prevImg = $('.images img.active').prev();
        imgAttiva.removeClass('active');
        prevImg.addClass('active');

        //pulsanti Slider
        var pulsanteActive = $('.button i.active');
        var pulsantePrecedente = $('.button i.active').prev();
        pulsanteActive.removeClass('active');
        pulsantePrecedente.addClass('active');
    }
}

// funzione quando slide a dx
function nextSlide() {
    if ( $('.images img.active').hasClass('last') ) {
        $('.images img.active').removeClass('active');
        $('.images img.first').addClass('active');

        //pulsanti Slider
        $('.button i.active').removeClass('active');
        $('.button i.first').addClass('active');
    } else {
        var imgAttiva = $('.images img.active');
        var nextImg = $('.images img.active').next();
        imgAttiva.removeClass('active');
        nextImg.addClass('active');

        //pulsanti Slider
        var pulsanteActive = $('.button i.active');
        var pulsanteSuccessivo = $('.button i.active').next();
        pulsanteActive.removeClass('active');
        pulsanteSuccessivo.addClass('active');
        console.log(pulsanteSuccessivo);
    }
}

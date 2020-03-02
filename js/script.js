$('.arrow-left i').click(prevSlide);    //click su freccia sx --> attiva slide a sx
$('.arrow-left i').click(function(){    //click, inoltre cambia il colore della freccia in quanto selezionata
    $('.arrow-left i').addClass('selected');
    $('.arrow-right i').removeClass('selected');
});
$('.arrow-right i').mouseleave(function(){  // allontanandosi dalla freccia, questa non è più selezionata
    $(this).removeClass('selected');
});

$('.arrow-right i').click(nextSlide);   //click su freccia dx --> attiva slide a dx
$('.arrow-right i').click(function(){   //click, inoltre cambia il colore della freccia in quanto selezionata
    $('.arrow-right i').addClass('selected');
    $('.arrow-left i').removeClass('selected');
});
$('.arrow-left i').mouseleave(function(){         // allontanandosi dalla freccia, questa non è più selezionata
    $(this).removeClass('selected');
});

/*funzione ciclo continuo e stop su hover --> ABILITARE PER VEDERE EFFETTO*/

// var slideContinuo = setInterval(nextSlide, 1500);
//
// $( ".images" ).mouseenter(function() {
//   clearInterval(slideContinuo);
// });
//
// $( ".images" ).mouseleave(function() {
//   slideContinuo = setInterval(nextSlide, 1500);
// });

/*funzione ciclo continuo e stop su click player --> ABILITARE PER VEDERE EFFETTO*/

// var slideContinuo = setInterval(nextSlide, 1500);
// clearInterval(slideContinuo);
// $( ".player i.play" ).click(function() {
//   slideContinuo = setInterval(nextSlide, 1500);
//   $( ".player i.play" ).addClass('selected')
//   $( ".player i.stop" ).removeClass('selected')
// });
//
// $( ".player i.stop" ).click(function() {
//   clearInterval(slideContinuo);
//   $( ".player i.stop" ).addClass('selected')
//   $( ".player i.play" ).removeClass('selected')
// });


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

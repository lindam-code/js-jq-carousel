// Legge il JavaScript solo dopo aver completamente caricato l'HTML
$(document).ready(function(){

    // Quando clicco sull'icona next devo far scomparire l'immagine corrente
    // e far comparire l'immagine successiva inoltre far segnare i pallini blu
    // dell'immagine corrente --> creo una funzione
    $('.slider-wrapper .next').click(
        function() {
            slideSuccessiva();
        }
    )

    // Quando clicco sull'icona prev devo far scomparire l'immagine corrente
    // e far comparire l'immagine precedente e segnare con pallino blu
    // l'immagine corrente --> creo un'altra funzione
    $('.slider-wrapper .prev').click(
        function(){
            slidePrecedente();
        }
    )
});


// FUNZIONI
// Funzione che toglie la classe active (display: in-line block) alla slide corrente
// e aggiunge la classe active alla slide succesiva
// Quando arriva all'ultima slide, aggiunge la classe actvie alla prima
// La stessa cosa fa con i cerchietti che indicano la slide corrente
function slideSuccessiva() {
    var slideCorrente = $('.images img.active');
    slideCorrente.removeClass('active');

    var cerchiettoCorrente = $('.nav i.active');
    cerchiettoCorrente.removeClass('active');


    if (slideCorrente.hasClass('last')) {
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    } else {
        slideCorrente.next('img').addClass('active');
        cerchiettoCorrente.next('i').addClass('active');
    }
}

// Funzione che toglie la classe active dalla slide corrente e la aggiunge
// alla slide precedente Quando arriva alla prima slide dello slide, aggiunge la
// classe active all'ultima slide. Stessa cosa con i cerchietti che
// segnano la slide corrente
function slidePrecedente() {
    var slideCorrente = $('.images img.active');
    slideCorrente.removeClass('active');

    var cerchiettoCorrente = $('.nav i.active');
    cerchiettoCorrente.removeClass('active');

    if(slideCorrente.hasClass('first')) {
        $('.images img.last').addClass('active');
        $('.nav i.last').addClass('active');
    } else {
      slideCorrente.prev('img').addClass('active');
      cerchiettoCorrente.prev('i').addClass('active');
    }

}

$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({

        items : 1, 
        navigation : true, // Show next and prev buttons
        mouseDrag: false, // Disable mousedrag
        autoplay:true,
        autoplayTimeout:1600,
        autoplayHoverPause:true,
        slideTransition: 'linear',
        animateOut: 'fadeOut',
        loop: true,
    });

});
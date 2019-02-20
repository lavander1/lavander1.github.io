function carouselOffers(){
 
 if ($(window).width() > 1200){
    $(".owl-carousel-offers").owlCarousel({

     items:4,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000
     });
  }
  else if ($(window).width() > 768){
    $(".owl-carousel-offers").owlCarousel({

     items:3,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000
     });
  }
  else if ($(window).width() > 576){
    $(".owl-carousel-offers").owlCarousel({

     items:2,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000
     });
  }
  else{
   $(".owl-carousel-offers").owlCarousel({

    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000
   });
  }
};

function carouselClients(){
 
 if ($(window).width() > 1200){
    $(".owl-carousel-clients").owlCarousel({

     items:3,
     center:true,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     margin:10
     });
  }
  else if ($(window).width() > 768){
    $(".owl-carousel-clients").owlCarousel({

     items:2,
     center:true,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     margin:10
     });
  }
  else {
    $(".owl-carousel-clients").owlCarousel({

     items:1,
     center:true,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     margin:10
     });
  }
};


$(document).ready(function() {
     carouselOffers();
});

$(window).resize(function(){
     carouselOffers();     
 });

$(document).ready(function() {
     carouselClients();
});

$(window).resize(function(){
     carouselClients();     
 });
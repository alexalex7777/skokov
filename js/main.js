'use strict';

// ---------slider-------------------
$('.sliders').slick({
  autoplay:true,    
  infinite: true,
  responsive: [{

    breakpoint: 1400,
    settings: {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2
    }

  },{

    breakpoint: 992,
    settings: {
      cinfinite: true,
      slidesToShow: 3,
      slidesToScroll: 2
    }

  }, {

    breakpoint: 768,
    settings: {
      cinfinite: true,
      slidesToShow: 2,
      slidesToScroll: 2
    }

  }, {

    breakpoint: 400,
    settings: {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});




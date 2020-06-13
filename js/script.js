
// SLIDER

//ABOUT

$(document).ready(function() {
  $('.banner__description_slider_block_image').slick({
    infinite: true,
    speed: 500,
  });
});


//SERVICES

$(document).ready(function() {
  $('.services_description').slick({
    speed: 600,
    slidesToShow: 2,
  });
});


//listings

$(document).ready(function() {
  $('.listings_moto').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 5375,
        settings: {
          variableWidth: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  });
});

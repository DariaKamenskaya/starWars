$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav:true,
    navClass: ['slider__nav_left','slider__nav_right'],
    responsive:{
      0:{
        items:1
      },
      700:{
        items:2
      },
      1100:{
        items: 3
      }, 
      1300:{
        items: 4
      }
    }
  })
});
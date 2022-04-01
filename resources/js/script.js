$('.Burger-Btn').on('click', function(){
  $('.Header').toggleClass('is-drawerActive');
  $('.Nav-Menu-Bg').fadeToggle();
  $('html,body').toggleClass('no-scroll');
});

$('.Header-Nav-List-Link').on('click', function(){
  if($('.Header').hasClass('is-drawerActive')) {
    $('.Header').removeClass('is-drawerActive');
    $('.Nav-Menu-Bg').fadeOut();
    $('html,body').removeClass('no-scroll');
  }
});

function fixedHeader() {
  let scroll = $(this).scrollTop();
  if(scroll < 30){
    $('.Header').removeClass('is-fixed');
  } else {
    $('.Header').addClass('is-fixed');
  };
};

function appearToTopBtn() {
  let scroll = $(this).scrollTop();
  if(scroll < 30){
    $('.To-Top-Btn').removeClass('is-appear');
  } else {
    $('.To-Top-Btn').addClass('is-appear');
  };
};

$(window).on('scroll',function(){
  fixedHeader();
  appearToTopBtn();
});

fixedHeader();
appearToTopBtn();


$('.To-Top-Btn').on('click', function(){
  $('html,body').animate({
    'scrollTop': 0,
  },500);
})

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoheight: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-origin",
    prevEl: ".swiper-button-prev-origin",
  },
});




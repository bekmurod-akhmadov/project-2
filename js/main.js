var categoryBtn = document.querySelector('#mobile_categories');
var navbarCategories = document.querySelector('.navigation');
var allNavs = document.querySelectorAll('.navigation a');

//navbar btn 
categoryBtn.addEventListener('click',function(){
  navbarCategories.classList.toggle('active');
})



var swiper = new Swiper('.swiper_container', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        // when window width is >= 320px
        576: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        920: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }

  });
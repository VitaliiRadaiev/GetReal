{
    let testimonialsSlider = document.querySelector('.testimonials-slider');
    if(testimonialsSlider) {
      var galleryThumbs = new Swiper(testimonialsSlider.querySelector('.testimonials-slider__thumbs'), {
        spaceBetween: 20,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryTop = new Swiper(testimonialsSlider.querySelector('.testimonials-slider__text'), {
        spaceBetween: 0,
        thumbs: {
          swiper: galleryThumbs
        },
        navigation: {
            nextEl: '.testimonials-slider__btn_right',
            prevEl: '.testimonials-slider__btn_left',
        },
      });
    }
  }
  
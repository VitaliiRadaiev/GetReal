{
    let testimonialsSlider = document.querySelector('.testimonials-slider-2');
    if(testimonialsSlider) {
        let slider;
            slider = new Swiper(testimonialsSlider.querySelector('.testimonials-slider-2__body .swiper-container'), {
            spaceBetween: 40,
            autoplay: {
              delay: 11980,
            },
            navigation: {
                nextEl: '.testimonials-slider-2__btn_right',
                prevEl: '.testimonials-slider-2__btn_left',
            },
          });
    }
}
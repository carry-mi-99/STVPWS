// const titles = document.querySelectorAll(".ind-title");
// let activeIndex = 0;
// let isAnimating = false;

// const swiper = new Swiper(".industry-slider", {
//      direction: "horizontal",
//        slidesPerView: 2.5,
//         loop:true,
//         speed: 700,
//         autoplay: {
//     delay: 3500,             
//     disableOnInteraction: false, 
//     pauseOnMouseEnter: true, 
//   },
//        spaceBetween: 20,
//           navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//      },
//        on:{
//        init: function () {
//       titles[0].classList.add("active");
//     },

//     slideChange: function () {
//       const currentIndex = this.activeIndex;

//       titles.forEach((title, index) => {
//         title.classList.remove("active", "exit-left");

//         if (index === currentIndex) {
//           title.classList.add("active");
//         } else if (index < currentIndex) {
//           title.classList.add("exit-left");
//         }
//       });
//     },
//     },
// });

const indMain = document.querySelector('.industries-wrapper');
if (indMain) {
    const titles = document.querySelectorAll(".ind-title");
    let activeIndex = 0;

    const swiper = new Swiper(".industry-slider", {
        slidesPerView: 2.5,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.3,
            },
            481: {
                slidesPerView: 1.5,
            },
            851: {
                slidesPerView: 2.5,
            },
        },
        on: {
            init(swiper) {
                titles.forEach((title, i) => {
                    title.classList.remove("active", "is-left");
                    if (i === 0) {
                        title.classList.add("active");
                    }
                });
                activeIndex = 0;
            },

             slideChangeTransitionStart(swiper) {
                const nextIndex = swiper.realIndex;
                const total = titles.length;

                const isLoopReset =
                    activeIndex === total - 1 && nextIndex === 0;

                if (isLoopReset) {
                    titles.forEach(title => {
                        title.style.transition = "none";
                        title.classList.remove("active", "is-left");
                    });

                    // force reflow
                    void indMain.offsetHeight;
                }

                requestAnimationFrame(() => {
                    titles.forEach((title, i) => {
                        title.style.transition = "";

                        if (i === nextIndex) {
                            title.classList.add("active");
                        } 
                        else if (i < nextIndex) {
                            title.classList.add("is-left");
                        }
                    });

                    activeIndex = nextIndex;
                });
            }

            // slideChangeTransitionStart(swiper) {
            //     const nextIndex = swiper.realIndex;
            //     const total = titles.length;

            //     const isLoopForward =
            //         activeIndex === total - 1 && nextIndex === 0;

            //     titles.forEach((title, i) => {
            //         title.classList.remove("active", "is-left");

            //         if (i === nextIndex) {
            //             title.classList.add("active");
            //         }
            //         else if (
            //             i < nextIndex ||
            //             isLoopForward
            //         ) {
            //             title.classList.add("is-left");
            //         }
            //     });

            //     activeIndex = nextIndex;
            // }

        }
    });

}

const testimonialMain = document.querySelector('.testimonial-wrapper');
if (testimonialMain) {
    const testiMain = document.querySelectorAll(".t-title");
    let currentIndex = 0;

    const tSwiper = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
        speed: 700,
          pagination: {
            el: '.swiper-pagination',
             clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        on: {
            init(tSwiper) {
                testiMain.forEach((title, i) => {
                    title.classList.remove("active", "is-left");
                    if (i === 0) {
                        title.classList.add("active");
                    }
                });
                activeIndex = 0;
            },

            slideChangeTransitionStart(tSwiper) {
                const nextIndex = tSwiper.realIndex;
                const total = testiMain.length;

                const isLoopReset =
                    activeIndex === total - 1 && nextIndex === 0;

                if (isLoopReset) {
                    testiMain.forEach(title => {
                        title.style.transition = "none";
                        title.classList.remove("active", "is-left");
                    });

                    // force reflow
                    void indMain.offsetHeight;
                }

                requestAnimationFrame(() => {
                    testiMain.forEach((title, i) => {
                        title.style.transition = "";

                        if (i === nextIndex) {
                            title.classList.add("active");
                        } 
                        else if (i < nextIndex) {
                            title.classList.add("is-left");
                        }
                    });

                    activeIndex = nextIndex;
                });
            }

        }
    });
}

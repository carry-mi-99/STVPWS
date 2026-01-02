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
let activeIndex = 0;
let justLoopedForward = false;
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
                speed: 0,
                autoplay: false
            },
            851: {
                slidesPerView: 2.5,
            },
        },
        // on: {
        //     init(swiper) {
        //         titles.forEach((title, i) => {
        //             title.classList.remove("active", "is-left");
        //             if (i === 0) {
        //                 title.classList.add("active");
        //             }
        //         });
        //         activeIndex = 0;
        //     },

        //     slideChangeTransitionStart(swiper) {
        //         const nextIndex = swiper.realIndex;
        //         const total = titles.length;

        //         const loopForward = activeIndex === total - 1 && nextIndex === 0;
        //         const loopBackward = activeIndex === 0 && nextIndex === total - 1;

        //         if (loopForward || loopBackward) {
        //             titles.forEach(t => {
        //                 t.style.transition = "none";
        //                 t.classList.remove("active", "is-left");
        //                 t.style.transform = "translateX(100%)";
        //             });

        //             // force reflow
        //             void indMain.offsetHeight;
        //         }

        //         requestAnimationFrame(() => {
        //             titles.forEach((t, i) => {
        //                 t.style.transition = "";
        //                 t.style.transform = "";

        //                 // IMPORTANT: always clear old state
        //                 t.classList.remove("active", "is-left");

        //                 if (i === nextIndex) t.classList.add("active");
        //                 else if (i < nextIndex) t.classList.add("is-left");
        //             });

        //             activeIndex = nextIndex;
        //         });
        //     }

        // }
    });

    const titleSwiper = new Swiper(".titleSlider", {
        slidesPerView: 1,
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
                slidesPerView: 1,
            },
            481: {
                slidesPerView: 1,
                speed: 0,
                autoplay: false
            },
            851: {
                slidesPerView: 1,
            },
        },

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
            el: '.testimonials-pagination',
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

                const loopForward = activeIndex === total - 1 && nextIndex === 0;
                const loopBackward = activeIndex === 0 && nextIndex === total - 1;

                if (loopForward || loopBackward) {
                    testiMain.forEach(t => {
                        t.style.transition = "none";
                        t.classList.remove("active", "is-left");
                        t.style.transform = "translateY(100%)";
                    });

                    void indMain.offsetHeight;
                }

                requestAnimationFrame(() => {
                    testiMain.forEach((t, i) => {
                        t.style.transition = "";
                        t.style.transform = "";

                        t.classList.remove("active", "is-left");

                        if (i === nextIndex) t.classList.add("active");
                        else if (i < nextIndex) t.classList.add("is-left");
                    });

                    activeIndex = nextIndex;
                });
            }


        }
    });
}

const blogSlider = document.querySelector('.blog-slider-mobile');
if (blogSlider) {

const blogSwiper = new Swiper(".blogSlider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 700,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1.2,
        },
    },

});
}

const timelineSlider = document.querySelector('.timeline-wrapper');
if (timelineSlider) {


// const slides = document.querySelectorAll(".tl-slide");
// const years  = document.querySelectorAll(".timeline-years .tl-yr");

// const TOTAL = slides.length;
// const STACK_SIZE = 3;

// let current = 0;
// let previous = null;

// function updateSlides(next) {
//   const direction = next > current ? "forward" : "backward";
//   previous = current;
//   current = next;

//   slides.forEach((slide, i) => {
//     slide.classList.remove(
//       "active",
//       "out-left",
//       "out-right",
//       "stack-1",
//       "stack-2",
//       "hidden"
//     );

//     let diff = i - current;
//     if (diff < 0) diff += TOTAL;

//     if (diff === 0) {
//       slide.classList.add("active");
//       return;
//     }

//     if (diff === 1) {
//       slide.classList.add("stack-1");
//       return;
//     }

//     if (diff === 2) {
//       slide.classList.add("stack-2");
//       return;
//     }

//     if (direction === "forward") {
//       if (i === previous) {
//         slide.classList.add("out-left");
//         return;
//       }
//     } else {
//       if (diff === TOTAL - 1) {
//         slide.classList.add("out-right");
//         return;
//       }
//     }

//     slide.classList.add("hidden");
//   });

//   years.forEach(y => y.classList.remove("active"));
//   years[current].classList.add("active");
// }

// years.forEach(year => {
//   year.addEventListener("click", () => {
//     const index = Number(year.dataset.index);
//     if (index !== current) updateSlides(index);
//   });
// });

// updateSlides(0);

const slides = document.querySelectorAll(".tl-slide");
const years  = document.querySelectorAll(".timeline-years .tl-yr");

const TOTAL = slides.length;
const STACK_SIZE = 3;

let current = 0;
let previous = 0;

function mod(n, m) {
  return ((n % m) + m) % m;
}

function updateSlides(next, isInit = false) {
  const isReverse = next < current;
  previous = current;
  current = next;

  const outIndex = isReverse
    ? mod(previous + 2, TOTAL)
    : previous;

  /* PASS 1: CLEAN */
  slides.forEach(slide => {
    slide.classList.remove(
      "active",
      "stack-1",
      "stack-2",
      "out-left",
      "out-back",
      "from-left",
      "reverse-pre",
      "hidden"
    );
  });

  /* PASS 2: PRE-STATE (REVERSE ONLY) */
  if (isReverse && !isInit) {
    slides.forEach((slide, i) => {
      const diff = mod(i - current, TOTAL);
      if (diff >= 0 && diff < STACK_SIZE) {
        slide.classList.add("reverse-pre");
      }
    });
  }

  /* PASS 3: FINAL STATE */
  requestAnimationFrame(() => {
    slides.forEach((slide, i) => {
      slide.classList.remove("reverse-pre");

      const diff = mod(i - current, TOTAL);

      if (!isInit && i === outIndex && i !== current) {
        slide.classList.add(isReverse ? "out-back" : "out-left");
        return;
      }

      if (diff === 0) {
        slide.classList.add("active");
        return;
      }

      if (diff === 1) {
        slide.classList.add("stack-1");
        return;
      }

      if (diff === 2) {
        slide.classList.add("stack-2");
        return;
      }

      slide.classList.add("hidden");
      
       if (isReverse && !isInit) {
      slide.classList.add("reverse-hidden");
    }
    });
  });

  years.forEach(y => y.classList.remove("active"));
  years[current]?.classList.add("active");
}





/* CLICK */
years.forEach(year => {
  year.addEventListener("click", () => {
    const index = Number(year.dataset.index);
    if (!Number.isNaN(index) && index !== current) updateSlides(index);
  });
});

/* INIT */
updateSlides(0, true);


  }

const curveMarquee = document.querySelector('.curve-marquee-main');
if (curveMarquee) {

const tp1 = document.getElementById("tp1");
const tp2 = document.getElementById("tp2");
const curve = document.getElementById("curve");

const text =
    "IER electric steam humidifier\u00A0\u00A0\u00A0*\u00A0\u00A0\u00A0" +
    "RES steamOres residential\u00A0\u00A0\u00A0*\u00A0\u00A0\u00A0" +
    "ISE steam exchange humidifier\u00A0\u00A0\u00A0*\u00A0\u00A0\u00A0" +
    "SR, SO, SB steam distribution\u00A0\u00A0\u00A0*\u00A0\u00A0\u00A0";

const pathLen = curve.getTotalLength();

tp1.textContent = text;
const textLen = tp1.getComputedTextLength();


const repeats = Math.ceil((pathLen * 1.5) / textLen);
const fullText = text.repeat(repeats);

tp1.textContent = fullText;
tp2.textContent = fullText;

let offset = 0;
const speed = 80;
let last = performance.now();

function tick(now) {
    const dt = (now - last) / 1000;
    last = now;

    offset = (offset + speed * dt) % pathLen;

    tp1.setAttribute("startOffset", offset);
    tp2.setAttribute("startOffset", offset - pathLen);

    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
}

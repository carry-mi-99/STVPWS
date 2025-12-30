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

import '../scss/style.scss';

import './see-more.js';
import './burger-menu.js';
import './swipers.js';
// import Swiper from 'swiper';
// import Swiper styles

// let swiper = new Swiper('.swiper', {
//   slidesPerView: 'auto',
//   spaceBetween: 16,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
// });

// let elementsToShow = 0;
// let areElementsShown = false;
// const showHideBtn = document.querySelector('#brands-slider__expand');
// const slidesCollection = document.querySelectorAll('.brands-slider__slide');

// if (window.innerWidth < 768) {
//   elementsToShow = 10000;
// } else if (window.innerWidth < 1120) {
//   // swiper.destroy();
//   elementsToShow = 6;
// } else {
//   // swiper.destroy();
//   elementsToShow = 8;
// }

// showElementsInitially(elementsToShow);

// function showElementsInitially(i) {

//   slidesCollection.forEach(element => {

//     if (i > 0) {
//       element.classList.add('brands-slider__slide--show');
//     }

//     i--;
//   });

// }


// showHideBtn.addEventListener('click', (e) => {

//   areElementsShown ? hideElements() : showElements();
//   showHideBtn.classList.toggle('brands-slider__show--shown');

// })


// function hideElements() {
//   let counter = 0;

//   slidesCollection.forEach(element => {
//     if (counter >= elementsToShow) element.classList.remove('brands-slider__slide--show');

//     counter++;

//   });

//   areElementsShown = false;
//   showHideBtn.textContent = 'Показать все';
// }

// function showElements() {

//   slidesCollection.forEach(element => {
//     element.classList.add('brands-slider__slide--show');
//   });

//   areElementsShown = true;
//   showHideBtn.textContent = 'Скрыть все';
// }



// // const se = document.querySelectorAll(".main__brands-slider--little-btns .brands-slider__slide")
// //       , ie = document.querySelectorAll(".main__brands-slider--huge-btns .brands-slider__slide")
// //       , re = document.querySelectorAll(".brands-slider__show")[0]
// //       , ne = document.querySelectorAll(".brands-slider__show")[1];
// //     function ae(e, t, s) {
// //         for (let i = 0; i < e.length; i++)
// //             i >= t && e[i].classList.toggle("brands-slider__slide--hidden");
// //         if (s) {
// //             var r = s.currentTarget;
// //             read-btn.classList.toggle("brands-slider__show--shown"),
// //             read-btn.classList.contains("brands-slider__show--shown") ? r.textContent = "Скрыть все" : r.textContent = "Показать все"
// //         }
// //     }
// //     function le() {
// //         ae(se, ee),
// //         ae(ie, te)
// //     }
// //     window.innerWidth < 768 ? (new K(".brands-slider__swiper",{
// //         modules: [Z],
// //         slidesPerView: "auto",
// //         spaceBetween: 16,
// //         pagination: {
// //             el: ".swiper-pagination",
// //             clickable: !0
// //         }
// //     }),
// //     new K(".main__brands-slider--huge-btns .brands-slider__swiper",{
// //         modules: [Z],
// //         slidesPerView: "auto",
// //         spaceBetween: 16,
// //         pagination: {
// //             el: ".swiper-pagination",
// //             clickable: !0
// //         }
// //     }),
// //     new K(".price__slider",{
// //         modules: [Z],
// //         slidesPerView: "auto",
// //         spaceBetween: 16,
// //         pagination: {
// //             el: ".swiper-pagination",
// //             clickable: !0
// //         }
// //     })) : window.innerWidth < 1120 ? (ee = 6,
// //     te = 3,
// //     le()) : (ee = 8,
// //     te = 4,
// //     le()),
// //     re.addEventListener("click", (function(e) {
// //         return ae(se, ee, e)
// //     }
// //     )),
// //     ne.addEventListener("click", (function(e) {
// //         return ae(ie, te, e)
// //     }
// //     ));
// //     var oe = document.querySelector(".mod-menu")
// //       , de = document.querySelector("#mod-menu__open")
// //       , ce = document.querySelector("#mod-menu__close")
// //       , pe = document.querySelectorAll(".mod-feedback")[0]
// //       , ue = document.querySelectorAll(".mod-feedback-open--1")
// //       , me = document.querySelector("#mod-feedback__close")
// //       , fe = document.querySelectorAll(".mod-feedback")[1]
// //       , he = document.querySelectorAll(".mod-feedback-open--2")
// //       , ve = document.querySelector("#mod-feedback__close2");
// //     function ge(e, t) {
// //         e.classList.toggle(t),
// //         be()
// //     }
// //     function we(e, t) {
// //         oe.classList.contains("mod-menu--active") && oe.classList.remove("mod-menu--active"),
// //         e.classList.toggle(t),
// //         be()
// //     }
// //     function be() {
// //         oe.classList.contains("mod-menu--active") || pe.classList.contains("mod-feedback--active") || fe.classList.contains("mod-feedback--active") ? document.body.classList.add("hide-scroll") : document.body.classList.remove("hide-scroll")
// //     }
// //     de.addEventListener("click", (function(e) {
// //         return ge(oe, "mod-menu--active")
// //     }
// //     )),
// //     ce.addEventListener("click", (function(e) {
// //         return ge(oe, "mod-menu--active")
// //     }
// //     )),
// //     oe.addEventListener("click", (function(e) {
// //         e.target == e.currentTarget && ge(oe, "mod-menu--active")
// //     }
// //     )),
// //     me.addEventListener("click", (function(e) {
// //         return we(pe, "mod-feedback--active")
// //     }
// //     )),
// //     ue.forEach((function(e) {
// //         e.addEventListener("click", (function(e) {
// //             return we(pe, "mod-feedback--active")
// //         }
// //         ))
// //     }
// //     )),
// //     pe.addEventListener("click", (function(e) {
// //         e.target == e.currentTarget && we(pe, "mod-feedback--active")
// //     }
// //     )),
// //     ve.addEventListener("click", (function(e) {
// //         return we(fe, "mod-feedback--active")
// //     }
// //     )),
// //     he.forEach((function(e) {
// //         e.addEventListener("click", (function(e) {
// //             return we(fe, "mod-feedback--active")
// //         }
// //         ))
// //     }
// //     )),
// //     fe.addEventListener("click", (function(e) {
// //         e.target == e.currentTarget && we(fe, "mod-feedback--active")
// //     }
// //     )),
// //     document.querySelector(".services__read-btn").addEventListener("click", (function(e) {
// //         return function(e, t) {
// //             if (document.querySelector(e).classList.toggle("text-shown"),
// //             t) {
// //                 var s = t.currentTarget;
// //                 s.classList.toggle("brands-slider__show--shown"),
// //                 s.classList.contains("brands-slider__show--shown") ? s.textContent = "Скрыть" : s.textContent = "Читать далее"
// //             }
// //         }(".services__text-toggle", e)
// //     }
// //     ));

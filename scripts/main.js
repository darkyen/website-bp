"use strict";function run(){var e=[].slice.call(document.querySelectorAll(".screenshots"),0);console.log(e);var i=new Swiper(".fullpage-swiper",{direction:"vertical",slidesPerView:"auto",mousewheelControl:!0,centeredSlides:!0,keyboardControl:!0,simulateTouch:!1,pagination:".swiper-pagination"}),n=new Swiper(".mdl-card-swiper",{pagination:".swiper-pagination-2",direction:"horizontal",slidesPerView:"auto",keyboardControl:!0,centeredSlides:!0,paginationClickable:!0,simulateTouch:!0,effect:"coverflow",spaceBetween:20});n.on("slideChangeEnd",function(i){var n=i.activeIndex+1,o="url(./imgs/ss"+n+".png)";e[0].style.backgroundImage=o,e[0].className+=" visible",e[1].className=e[1].className.replace(" visible",""),e.push(e.shift())}),console.log(i)}var k=function(){foo};window.onload=function(){return run()};
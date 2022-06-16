'use strict';

// sec7 gallery

const sec7SecCon = document.querySelector('.section.sec7>.sec-con');

const sec7Gallery = sec7SecCon.querySelector('.left-con>.gallery');
const sec7GalleryLi = sec7SecCon.querySelectorAll('.left-con>.gallery>ul>li');
// gallery
const sec7ItemsUl = sec7SecCon.querySelector('.left-con>.bcon>.items>ul');
const sec7ItemsLi = sec7SecCon.querySelectorAll('.left-con>.bcon>.items>ul>li');
// arrow

i = -1;

function sec7GalleryHandler(e) {
  i++;
  const eTarget = e.target;
  // console.log(i);

  sec7ItemsLi.forEach((el, idx) => {
    i = idx;
    if (el === eTarget) {
      if (i === idx) {
        if (i >= sec7GalleryLi - 1) i = -1;
        const gap = sec7GalleryLi[1].offsetLeft - sec7GalleryLi[0].offsetLeft;
        const goto = -gap * i + 'px';
        sec7Gallery.style.left = goto;
        // console.log(i);
      }
      if (i >= sec7GalleryLi - 1) i = -1;
      console.log(i);
    }
  });
}

sec7ItemsUl.addEventListener('click', sec7GalleryHandler);

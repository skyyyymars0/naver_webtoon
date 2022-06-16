'use strict';

const sectionSec1 = document.querySelector('.section.sec1>.sec-con');

// gallery
const sec1Gallery = sectionSec1.querySelector('.gallery');
const sec1GalleryLi = sectionSec1.querySelectorAll('.gallery>ul>li');

// spanArrow
const sec1Arrow = sectionSec1.querySelector('.arrow-btn');
const sec1SpanArrow = sectionSec1.querySelectorAll('span.arrow>img');

// bcon items
const sec1ItemsUl = sectionSec1.querySelector('.bcon>.items>ul');
const sec1ItemsLi = sectionSec1.querySelectorAll('.bcon>.items>ul>li');

// 1. background url 처리

sec1GalleryLi.forEach((el, idx) => {
  el.style.background = `url(img/sec1/gallery_bg${idx}.jpg) no-repeat 50%/cover`;
});

//  2. autoGallery function

let i = -1;
function sec1AutoGallery() {
  if (i >= sec1GalleryLi.length - 1) i = -1;
  i++;
  const gap = sec1GalleryLi[1].offsetLeft - sec1GalleryLi[0].offsetLeft;
  const goto = -gap * i + 'px';
  sec1Gallery.style.left = goto;
  sec1ItemsLi.forEach((el, idx) => {
    if (idx === i) {
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }
  });
  if (i >= sec1GalleryLi.length - 1) i = -1;
}

sec1AutoGallery();

let setIn = setInterval(sec1AutoGallery, 5000);

// 3. over & out event

function sec1OverEventHandler(e) {
  const eTarget = e.target;
  sec1SpanArrow.forEach((el, idx) => {
    if (el === eTarget) {
      clearInterval(setIn);
    }
  }); //   span arrow over

  sec1ItemsLi.forEach((el, idx) => {
    if (el === eTarget) {
      clearInterval(setIn);
    }
  }); //   items over
}

function sec1OutEventHandler(e) {
  const eTarget = e.target;
  sec1SpanArrow.forEach((el, idx) => {
    if (el === eTarget) {
      setIn = setInterval(sec1AutoGallery, 5000);
    }
  }); // span arrow out

  sec1ItemsLi.forEach((el, idx) => {
    if (el === eTarget) {
      setIn = setInterval(sec1AutoGallery, 5000);
    }
  }); //   items out
}

sec1Arrow.addEventListener('mouseover', sec1OverEventHandler);
sec1Arrow.addEventListener('mouseout', sec1OutEventHandler);

sec1ItemsUl.addEventListener('mouseover', sec1OverEventHandler);
sec1ItemsUl.addEventListener('mouseout', sec1OutEventHandler);

// 4. arrow click event

function sec1ArrowClickHandler(e) {
  const eTarget = e.target;
  sec1SpanArrow.forEach((el, idx) => {
    if (el === eTarget) {
      if (idx === 0) {
        i--;
        if (i < 0) i = sec1GalleryLi.length - 1;
        const gap = sec1GalleryLi[1].offsetLeft - sec1GalleryLi[0].offsetLeft;
        const goto = -gap * i + 'px';
        sec1Gallery.style.left = goto;

        sec1ItemsLi.forEach((el, idx) => {
          if (idx === i) {
            el.classList.add('on');
          } else {
            el.classList.remove('on');
          }
        });
      } else if (idx === 1) {
        if (i >= sec1GalleryLi.length - 1) i = -1;
        i++;
        const gap = sec1GalleryLi[1].offsetLeft - sec1GalleryLi[0].offsetLeft;
        const goto = -gap * i + 'px';
        sec1Gallery.style.left = goto;

        sec1ItemsLi.forEach((el, idx) => {
          if (idx === i) {
            el.classList.add('on');
          } else {
            el.classList.remove('on');
          }
        });
      }
    }
  });
}

sec1Arrow.addEventListener('click', sec1ArrowClickHandler);

// 5. items click

function sec1ItemsUlClickHandler(e) {
  const eTarget = e.target;

  sec1ItemsLi.forEach((el, idx) => {
    if (el === eTarget) {
      const gap = sec1GalleryLi[1].offsetLeft - sec1GalleryLi[0].offsetLeft;
      const goto = -gap * idx + 'px';
      sec1Gallery.style.left = goto;
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }
  });
}

sec1ItemsUl.addEventListener('click', sec1ItemsUlClickHandler);

// 즉시실행함수
(() => {
  sec1AutoGallery;
})();

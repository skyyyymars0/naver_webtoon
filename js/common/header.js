'use strict';

// bottom-header의 gnb들에 click 이벤트 주기

const header = document.querySelector('.header');

const bottomHeader = header.querySelector('.bottom-header');

const bottomCenterGnbUl = bottomHeader.querySelector('.bottom-center-gnb>ul');
const bottomCenterGnbLi = bottomHeader.querySelectorAll('.bottom-center-gnb>ul>li');
// 가운데 gnb
const bottomRightGnbUl = bottomHeader.querySelector('.bottom-right-gnb>ul');
const bottomRightGnbLi = bottomHeader.querySelectorAll('.bottom-right-gnb>ul>li');

const bottomGnbLUl = bottomHeader.querySelector('ul');
const bottomGnbLi = bottomHeader.querySelectorAll('ul>li');

// 맨 우측 gnb

function headerGnbMenuHandler() {
  bottomHeader.addEventListener('click', (e) => {
    const eTarget = e.target;
    const eTargetParent = eTarget.parentElement;
    e.preventDefault();
    bottomGnbLi.forEach((el, idx) => {
      if (eTargetParent === el) {
        el.children[0].classList.add('on');
      } else {
        el.children[0].classList.remove('on');
      }
    });
  });
}

headerGnbMenuHandler()
//
// bottomCenterGnbUl.addEventListener('click', (e) => {
//   const eTarget = e.target;
//   const eTargetParent = eTarget.parentElement;
//   e.preventDefault();
//   bottomCenterGnbLi.forEach((el, idx) => {
//     if (eTargetParent === el) {
//       el.children[0].classList.add('on');
//     } else {
//       el.children[0].classList.remove('on');
//     }
//   });
//   // } else console.log(eTarget);
// });

//
// bottomRightGnbUl.addEventListener('click', (e) => {
//   const eTarget = e.target;
//   const eTargetParent = eTarget.parentElement;
//   e.preventDefault();
//   //   console.log(eTarget);
//   bottomRightGnbLi.forEach((el, idx) => {
//     if (eTargetParent === el) {
//       el.children[0].classList.add('on');
//     } else {
//       el.children[0].classList.remove('on');
//     }
//   });
// });

'use strict';

const sec4Con = document.querySelector('.section.sec4 > .sec-con');

const adConLI = sec4Con.querySelectorAll('.ad-con>ul>li');
const adConImg = sec4Con.querySelector('.ad-con>ul>li>img');
const adConArrowBtn = sec4Con.querySelector('.ad-con>ul>li>.button-box');

//
const adBehindCon = sec4Con.querySelector('.ad-con>.ad-behind-con');
// const adInnerBehindA = adBehindCon.querySelector('a');

const closeBtn = adBehindCon.querySelector('span.close-btn');

// 1. ad-con의 main button 클릭하면 숨겨져 있던 full img가 등장하도록 (top을 이용?), full img의 opacity도 원상복구 해야만

adConArrowBtn.addEventListener('click', (e) => {
  adBehindCon.classList.toggle('adBehindToggle');
});

// 2. behind ad con의 close button을 누르면 다시 full 이미지가 사라지게

closeBtn.addEventListener('click', (e) => {
  adBehindCon.classList.toggle('adBehindToggle');
});

'use strict';

// select option tab

const bestChallSelect = document.querySelector('.bestChall-top-con>select');
const bestChallOption = document.querySelectorAll('.bestChall-top-con>select>option');

const bestChallBannerCon = document.querySelectorAll('.bestChall-banner>.banner-contents');

function bannerHandler(e) {
  const eTarget = e.target;
  const eTargetVal = e.target.value;
  bestChallOption.forEach((el, idx) => {
    if (eTargetVal === bestChallOption[idx].value) {
      bestChallBannerCon.forEach((el2, idx2) => {
        if (idx === idx2) {
          // console.log(eTarget[idx]);
          // console.log(el2);
          el2.classList.add('bannerDisplay');
        } else el2.classList.remove('bannerDisplay');
      });
    }
  });
}

bestChallSelect.addEventListener('change', bannerHandler);

'use strict';

// select option tab

const challSelect = document.querySelector('.chall-top-con>select');
const challOption = document.querySelectorAll('.chall-top-con>select>option');

const challBannerCon = document.querySelectorAll('.chall-banner>.banner-contents');

function bannerHandler2(e) {
  const eTarget = e.target;
  const eTargetVal = e.target.value;
  challOption.forEach((el, idx) => {
    if (eTargetVal === challOption[idx].value) {
      challBannerCon.forEach((el2, idx2) => {
        if (idx === idx2) {
          // console.log(eTarget[idx]);
          // console.log(el2);
          el2.classList.add('bannerDisplay');
        } else el2.classList.remove('bannerDisplay');
      });
    }
  });
}

challSelect.addEventListener('change', bannerHandler2);

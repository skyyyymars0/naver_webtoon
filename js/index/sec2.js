'use strict';

const sectionSec2 = document.querySelector('.section.sec2>.sec-con ');

// 1. banner gallery
const trendBanner = sectionSec2.querySelector('.trend-banner');
const trendBannerUl = trendBanner.querySelector('ul');
const trendBannerLi = trendBanner.querySelectorAll('ul>li');

// arrow
const trendArrow = sectionSec2.querySelector('.trend-arrow');
const spanTrendArrows = sectionSec2.querySelectorAll('span.arrow');

// 1. image 처리
trendBannerLi.forEach((el, idx) => {
  const trendImg = el.querySelector('img');
  trendImg.setAttribute('src', `img/sec2/trend_img${idx}.jpg`);
});

//  1-2 gallery function
let sec2i = 1;

const trendBannerLength = Object.keys(trendBanner).length;

function trendBannerFunc(e) {
  const eTarget = e.target;
  const gap = sectionSec2.offsetWidth;
  // console.log(gap);
  const goto = -gap * sec2i + 'px';
  // console.log(goto);

  spanTrendArrows.forEach((el, idx) => {
    if (el === eTarget) {
      if (idx === 0) {
        sec2i++;
        trendBanner.style.left = goto;
        if (sec2i >= 2) sec2i = 0;
        console.log(sec2i);
        // console.log(goto);
      } else if (idx === 1) {
        sec2i++;
        trendBanner.style.left = goto;
        if (sec2i >= 2) sec2i = 0;
        console.log(sec2i);
        // console.log(goto);
      }
    }
  });
}

trendArrow.addEventListener('click', trendBannerFunc);

(() => {
  trendBannerFunc;
})();

// 2. sec2 bannerTab func-------

// sec2 trend banner 배열
const sec2BannerArr = {
  man: {
    img: [
      'img/sec2/man/trend_img0.jpg',
      'img/sec2/man/trend_img1.jpg',
      'img/sec2/man/trend_img2.jpg',
      'img/sec2/man/trend_img3.jpg',
      'img/sec2/man/trend_img4.jpg',
      'img/sec2/man/trend_img5.jpg',
      'img/sec2/man/trend_img6.jpg',
      'img/sec2/man/trend_img7.jpg',
      'img/sec2/man/trend_img8.jpg',
      'img/sec2/man/trend_img9.jpg',
    ],
    title: [
      '멸망 이후의 세계',
      '엽총소년',
      '랜덤채팅의 그녀!',
      '중증외상센터: 골든 아워',
      '전지적 독자 시점',
      '연애혁명',
      '스터디그룹',
      '세상은 돈과 권력',
      '세상은 돈과 권력',
      '갓 오브 하이스쿨',
      '투신전생기',
    ],
    cartoonist: ['S-Cynan/언데드 감자/싱숑', '김칸비/홍필', '박은혁', '홍비치라/한산이가', 'UMI/슬리피-C/싱숑', '232', '신형욱/유승연', '한동우/이도희', '박용제', '청담'],
  },
  woman: {
    img: [
      'img/sec2/woman/trend_img0.jpg',
      'img/sec2/woman/trend_img1.jpg',
      'img/sec2/woman/trend_img2.jpg',
      'img/sec2/woman/trend_img3.jpg',
      'img/sec2/woman/trend_img4.jpg',
      'img/sec2/woman/trend_img5.jpg',
      'img/sec2/woman/trend_img6.jpg',
      'img/sec2/woman/trend_img7.jpg',
      'img/sec2/woman/trend_img8.jpg',
      'img/sec2/woman/trend_img9.jpg',
    ],
    title: ['정년이', '여신강림', '내가 키운 S급들', '대학원 탈출일지', '하루만 네가 되고 싶어', '집이없어', '이두나!', '중증외상센터: 골든 아워', '대공님, 실수였어요!', '소녀 180'],
    cartoonist: ['서이레/나몬', '야옹이', 'seri/비완/근서', '요다', '삼', '와난', '민송아', '홍비치라/한산이가', '시세Sisse, 조이뿅', '나우원/델라'],
  },
};

const genderButtonUl = sectionSec2.querySelector('.trend-gender>ul');
const genderButtonLi = sectionSec2.querySelectorAll('.trend-gender>ul>li');
const trendBannerPBox = document.querySelectorAll('.p-box');

genderButtonUl.addEventListener('click', (e) => {
  const eTarget = e.target;
  trendBannerLi.forEach((el, idx) => {
    const trendBannerImg = trendBannerLi[idx].children[0].children[0];
    const trendBannerTitle = trendBannerPBox[idx].children[0];
    const trendBannerCartoonist = trendBannerPBox[idx].children[1];

    // console.log(trendBannerTitle, trendBannerCartoonist);
    // console.log(trendBannerImg);
    genderButtonLi.forEach((el, idx2) => {
      if (eTarget === el) {
        el.classList.add('trendBannerToggle');
        if (0 === idx2) {
          trendBannerImg.setAttribute('src', sec2BannerArr.man.img[idx]);
          trendBannerImg.setAttribute('alt', sec2BannerArr.man.title[idx]);
          trendBannerTitle.innerText = sec2BannerArr.man.title[idx];
          trendBannerCartoonist.innerText = sec2BannerArr.man.cartoonist[idx];
        } else if (1 === idx2) {
          trendBannerImg.setAttribute('src', sec2BannerArr.woman.img[idx]);
          trendBannerImg.setAttribute('alt', sec2BannerArr.woman.title[idx]);
          trendBannerTitle.innerText = sec2BannerArr.woman.title[idx];
          trendBannerCartoonist.innerText = sec2BannerArr.woman.cartoonist[idx];
        }
      } else el.classList.remove('trendBannerToggle');
    });
  });
});

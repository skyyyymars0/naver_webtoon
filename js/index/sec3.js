'use strict';

// sec3 banner

const genreCategory1Ul = document.querySelector('.section.sec3> .sec-con .genre-category1>ul');
const genreCategory1Li = document.querySelectorAll('.section.sec3> .sec-con .genre-category1>ul>li');

const genreCategory2Ul = document.querySelector('.section.sec3> .sec-con .genre-category2>ul');
const genreCategory2Li = document.querySelectorAll('.section.sec3> .sec-con .genre-category2>ul>li');
// banner category1, 2

const genreBannerCon = document.querySelector('.section.sec3> .sec-con .genre-banner>.banner-contents');
const genreBannerConUl = document.querySelector('.section.sec3> .sec-con .genre-banner>.banner-contents>ul');
const genreBannerConLi = document.querySelectorAll('.section.sec3> .sec-con .genre-banner>.banner-contents>ul>li');
// banner list

const sec3BannerArr = {
  episode: {
    img: [
      'img/sec3/episode/genre_banner_img0.jpg',
      'img/sec3/episode/genre_banner_img1.jpg',
      'img/sec3/episode/genre_banner_img2.jpg',
      'img/sec3/episode/genre_banner_img3.jpg',
      'img/sec3/episode/genre_banner_img4.jpg',
      'img/sec3/episode/genre_banner_img5.jpg',
    ],
    title: ['세상은 돈과 권력', '[드라마원작]유미의 세포', '강림전기개정기', '노곤하개', '약한영웅', '오늘의 순정망화'],
    episodeTitle: ['시즌2 42화','33화 비밀보장','42화 등잔밑 이슬은찬 기운 반기고(1)','후기','161화','시즌2 216화'],
    cartoonist: ['한동우/이도희','이동건','철무장미/장군','홍끼','서패스/강진석','손하기']
  },

  omnibus: {
    img: [`img/sec3/omnibus/genre_banner_img0.jpg`,
      'img/sec3/omnibus/genre_banner_img1.jpg',
      'img/sec3/omnibus/genre_banner_img2.jpg',
      'img/sec3/omnibus/genre_banner_img3.jpg',
      'img/sec3/omnibus/genre_banner_img4.jpg',
      'img/sec3/omnibus/genre_banner_img5.jpg',
    ],
    title: ['기기괴괴', '내일','마루한-구현동화전', '무서운게 딱좋아!','중독연구소', '청춘 블라썸' ],
    episodeTitle: ['371화 겨울나무 #2','241화 함께(마무리)','154화 Peter Pan 26','33화. 저승에서 돌아온 아내(2)','83화. 재회(3)', '85화: EP.3 가을의 꽃(25)'],
    cartoonist: ['오성대','라마','박성우','이동규','김택기','홍덕/NEMONE']
  },

  story: {
    img: [
      `img/sec3/story/genre_banner_img0.jpg`,
      `img/sec3/story/genre_banner_img1.jpg`,
      `img/sec3/story/genre_banner_img2.jpg`,
      `img/sec3/story/genre_banner_img3.jpg`,
      `img/sec3/story/genre_banner_img4.jpg`,
      `img/sec3/story/genre_banner_img5.jpg`,
    ],
    title: ['세기말 풋사과 보습학원', '귀곡의 문', '야생천사 보호구역', '숲속의 담', '이번 생도 잘 부탁해', '골든체인지'],
    episodeTitle: ['65화','180화 지탱할 것','55화 행복해서 이상한 생일(3)','114화','83화', '193화'],
    cartoonist: ['순끼','삼촌','루시드','다홍','이헤','브림스']
  },
};

const bannerImg = document.querySelectorAll('.wt-img-box>a>img')
const bannerPTilte = document.querySelectorAll('.banner-p-box>a>p.title')
const bannerPEpisodeTitle = document.querySelectorAll('.banner-p-box>a>p.episode')
const bannerPAuthor = document.querySelectorAll('.banner-p-box>a>p.author')

function sec3BannerCate1Func(e) {
  const eTargetParent = e.target.parentElement;
  e.preventDefault();

  genreCategory1Li.forEach((el, idx) => {
    if (eTargetParent === el) {
      el.children[0].classList.add('on');
      bannerImg.forEach((el2, idx2) => {
        if (idx === 0) {
          // console.log(el2, idx2)
          el2.setAttribute('src', sec3BannerArr.episode.img[idx2]);
          el2.setAttribute('alt', sec3BannerArr.episode.title[idx2]);
          bannerPTilte[idx2].innerText = sec3BannerArr.episode.title[idx2];
          bannerPEpisodeTitle[idx2].innerText = sec3BannerArr.episode.episodeTitle[idx2];
          bannerPAuthor[idx2].innerText = sec3BannerArr.episode.cartoonist[idx2];
          
        }
        if (idx === 1) {
          el2.setAttribute('src', sec3BannerArr.omnibus.img[idx2]);
          el2.setAttribute('alt', sec3BannerArr.omnibus.title[idx2]);
          bannerPTilte[idx2].innerText = sec3BannerArr.omnibus.title[idx2];
          bannerPEpisodeTitle[idx2].innerText = sec3BannerArr.omnibus.episodeTitle[idx2];
          bannerPAuthor[idx2].innerText = sec3BannerArr.omnibus.cartoonist[idx2];
          
          
        }
        if (idx === 2) {
          el2.setAttribute('src', sec3BannerArr.story.img[idx2]);
          el2.setAttribute('alt', sec3BannerArr.story.title[idx2]);
          bannerPTilte[idx2].innerText = sec3BannerArr.story.title[idx2];
          bannerPEpisodeTitle[idx2].innerText = sec3BannerArr.story.episodeTitle[idx2];
          bannerPAuthor[idx2].innerText = sec3BannerArr.story.cartoonist[idx2];
        }
      });
    } else el.children[0].classList.remove('on');
  });
}

function sec3BannerCate2Func(e) {
  const eTarget = e.target;
  const eTargetParent = e.target.parentElement;
  e.preventDefault();
  genreCategory2Li.forEach((el, idx) => {
    if (eTargetParent === el) {
      el.children[0].classList.add('on');
    } else el.children[0].classList.remove('on');
  });
}

genreCategory1Ul.addEventListener('click', sec3BannerCate1Func);
// 카테고리 1
genreCategory2Ul.addEventListener('click', sec3BannerCate2Func);
// 카테고리 2
'use strict';

// 반응형 반응형 360px js

const body = document.querySelector('body');

const hiddenMenuIcon = document.querySelector('.inner-header>span.hidden_menu_icon');
// span.hidden_menu_icon

const hiddenCloseIcon = document.querySelector('.inner-hidden span.hidden_close_icon');
// span.hidden_close_icon

const hiddenHeader = document.querySelector('.hidden-header .inner-hidden ');

hiddenMenuIcon.addEventListener('click', (e) => {
  hiddenHeader.style.right = '0';
  body.classList.add('scrollingStop');
});

hiddenCloseIcon.addEventListener('click', (e) => {
  hiddenHeader.style.right = '-360px';
  body.classList.remove('scrollingStop');
});

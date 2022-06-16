'use strict';

// 1. 유효성 검사

const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPw');
const submitBtn = document.querySelector('.submit-box>input');

const pBox = document.querySelectorAll('p.box');

const loginForm = document.querySelector('#loginForm');

function loginHandler() {
  if (userId.value === '') {
    pBox[0].innerText = '아이디를 입력해 주세요.';
    return false;
  } else {
    pBox[0].innerText = '';
  }
  if (userPw.value === '') {
    pBox[1].innerText = '비밀번호를 입력해 주세요.';
    return false;
  } else pBox[1].innerText = '';

  loginForm.submit();
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginHandler();
});

// 2. tab menu

const tabMenuUl = document.querySelector('.tab-menu>ul');
const tabMenuLi = document.querySelectorAll('.tab-menu>ul>li');
const tabContentsLi = document.querySelectorAll('.tab-contents>ul>li');

tabMenuUl.addEventListener('click', (e) => {
  const eTarget = e.target;

  tabMenuLi.forEach((el, idx) => {
    if (el === eTarget) {
      // console.log(idx);
      el.classList.add('tabMenuClicked');
      tabContentsLi.forEach((el, idx2) => {
        if (idx === idx2) {
          // console.log(idx, idx2);
          el.classList.add('tabContentsBlock');
        } else el.classList.remove('tabContentsBlock');
      });
    } else el.classList.remove('tabMenuClicked');
  });
});
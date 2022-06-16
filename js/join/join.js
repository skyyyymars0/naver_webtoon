'use strict';

// sec1 아이디, 비밀번호 유효성 검사

const joinForm = document.forms[0];

const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPw');
const userPwCheck = document.querySelector('#userPwCheck');
const sec1P = document.querySelectorAll('.sec1P');

// sec2 이름, 생년월일, 성별, 이메일 유효성 검사
const userName = document.querySelector('#userName');
const userBirth = document.querySelectorAll('.userBirth'); // userBirth
const userGender = document.querySelector('#userGender');
const userEmail = document.querySelector('#userEmail');
const sec2P = document.querySelectorAll('.sec2P');

// sec3 휴대전화
const userPhoneCheck = document.querySelector('#userPhoneCheck');
const userPhoneConfirm = document.querySelector('#userPhoneConfirm');
const sec3P = document.querySelectorAll('.sec3P');

// submit button
const joinBtn = document.querySelector('.submitBtn>input');

function joinHandler(e) {
  // sec1--
  const idRegExp = /^[A-Za-z0-9-_]{5,20}$/;
  const idValue = userId.value;

  if (userId.value === '') {
    sec1P[0].innerText = '필수 정보입니다.';
    userId.focus();
    return false;
  } else if (idRegExp.test(idValue) === false) {
    sec1P[0].innerText = 'ID 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
    userId.focus();
    return false;
  } else {
    sec1P[0].innerText = '';
  }
  //아이디

  const pwRegExp = /^[A-Za-z0-9-_!@]{8,16}$/;
  const pwValue = userPw.value;
  if (userPw.value === '') {
    sec1P[1].innerText = '필수 정보입니다.';
    userPw.focus();
    return false;
  } else if (pwRegExp.test(pwValue) === false) {
    sec1P[1].innerText = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
    userPw.focus();
    return false;
  } else sec1P[1].innerText = ''; // 비밀번호

  if (userPwCheck.value === '') {
    sec1P[2].innerText = '필수 정보입니다.';
    userPwCheck.focus();
    return false;
  } // 비밀번호 재확인

  // sec2--

  if (userName.value === '') {
    sec2P[0].innerText = '필수 정보입니다.';
    userName.focus();
    return false;
  } else sec2P[0].innerText = ''; // 이름

  const birthYear = userBirth[0];
  const birthMonth = userBirth[1];
  const birthDay = userBirth[2];

  const birthYearRegExp = /^[0-9]{1,}$/;
  const birthDayRegExp = /^[0-9]{0,2}$$/;
  if (birthYear.value === '') {
    sec2P[1].innerText = '태어난 년도 4자리를 정확하게 입력하세요.';
    birthYear.focus();
    return false;
  } else if (birthYearRegExp.test(birthYear.value) === false) {
    console.log('태어난 년도는 숫자로 입력하세요.');
    birthYear.focus();
    return false;
  }

  if (birthMonth.value === '월') {
    sec2P[1].innerText = '태어난 월을 선택하세요.';
    birthMonth.focus();
    return false;
  }

  if (birthDay.value === '') {
    sec2P[1].innerText = '태어난 일(날짜) 2자리를 정확하게 입력하세요.';
    birthDay.focus();
    return false;
  } else if (birthDayRegExp.test(birthDay.value) === false) {
    sec2P[1].innerText = '태어난 일(날짜)은 숫자로 입력하세요.';
    birthDay.focus();
    return false;
  }
  // 생년월일

  if (userGender[0].selected === true) {
    sec2P[2].innerText = '필수 정보입니다.';
    return false;
  } else sec2P[2].innerText = '';
  // 성별

  const EmailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$/;
  if (EmailRegExp.test(userEmail.value) === false) {
    sec2P[3].innerText = '이메일 주소를 다시 확인해주세요.';
    userEmail.focus();
    return false;
  } else sec2P[3].innerText = ''; // 이메일
  // sec3--

  if (userPhoneCheck.value === '') {
    sec3P[0].innerText = '필수 정보입니다.';
    // return false;
    userPhoneCheck.focus();
    return false;
  } else sec3P[0].innerText = '';
  // 전화번호
  if (userPhoneConfirm.value === '') {
    sec3P[1].innerText = '인증이 필요합니다.';
    userPhoneConfirm.focus();
    return false;
  } else sec3P[1].innerText = '';
  // 전화번호 확인

  joinForm.submit();
}

joinBtn.addEventListener('click', joinHandler);

userPwCheck.addEventListener('keyup', (e) => {
  if (userPw.value !== userPwCheck.value) {
    sec1P[2].innerText = '비밀번호가 일치하지 않습니다.';
  } else sec1P[2].innerText = '';
});

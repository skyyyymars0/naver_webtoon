'use strict';

const timeOutTimer = document.querySelectorAll('.timeOut-con>p')[1];

let time = 180000;
let min = 3;
let sec = 60;

timeOutTimer.innerText = '03:00';

function timer() {
  time = time - 1000;
  min = time / (60 * 1000);
  //   console.log(min);
  // console.log(Math.floor(min));

  if (sec > 0) {
    sec = sec - 1;
    timeOutTimer.innerText = `${String(Math.floor(min)).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
  if (sec === 0) {
    sec = 60;
    timeOutTimer.innerText = `${String(Math.floor(min)).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
  }

  if (time === 0) {
    clearInterval(timerSetIn);
    timeOutTimer.innerText = '00:00';
  }
}
let timerSetIn = setInterval(timer, 1000);

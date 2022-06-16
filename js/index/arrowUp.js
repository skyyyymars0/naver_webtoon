'strict';

const arrowUp = document.querySelector('span.arrowUp');

// window scroll시 arrowUp opacity

function arrowUpHandler() {
  document.addEventListener('scroll', (e) => {
    const topVal = document.documentElement.scrollTop;
    if (topVal >= 200) {
      arrowUp.style.opacity = '1';
    } else if (topVal <= 100) {
      arrowUp.style.opacity = '0';
    }
  });

  // arrowUp 클릭 시 windowTop으로 이동

  arrowUp.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });
}

arrowUpHandler()

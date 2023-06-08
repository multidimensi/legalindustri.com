// Ambil elemen logo
window.addEventListener('scroll', function () {
  var logo = document.querySelector('.logo2');
  var iconRight = document.querySelector('.icon-right');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0 && window.innerWidth >= 980) {
    logo.classList.add('show');
    iconRight.classList.add('show');
  } else {
    logo.classList.remove('show');
    iconRight.classList.remove('show');
  }
});

window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
});

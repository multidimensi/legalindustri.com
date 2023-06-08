// js1.js
var legalNavLink = document.getElementById('legal-nav');
var legalMegaBox = document.getElementById('legal-drop');

legalNavLink.addEventListener('click', function (e) {
  e.preventDefault();

  var isDropdownVisible = legalMegaBox.classList.contains('show');

  if (isDropdownVisible) {
    legalMegaBox.classList.remove('show');
  } else {
    legalMegaBox.classList.add('show');
  }
});

document.addEventListener('click', function (e) {
  var isOutsideClick = !legalNavLink.contains(e.target) && !legalMegaBox.contains(e.target);

  if (isOutsideClick) {
    legalMegaBox.classList.remove('show');
  }
});

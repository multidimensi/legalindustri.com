// js1.js
var dgmNavLink = document.getElementById('dgm-nav');
var dgmMegaBox = document.getElementById('dgm-drop');

dgmNavLink.addEventListener('click', function (e) {
  e.preventDefault();

  var isDropdownVisible = dgmMegaBox.classList.contains('show');

  if (isDropdownVisible) {
    dgmMegaBox.classList.remove('show');
  } else {
    dgmMegaBox.classList.add('show');
  }
});

document.addEventListener('click', function (e) {
  var isOutsideClick = !dgmNavLink.contains(e.target) && !dgmMegaBox.contains(e.target);

  if (isOutsideClick) {
    dgmMegaBox.classList.remove('show');
  }
});

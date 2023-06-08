// js1.js
var procurementNavLink = document.getElementById('procurement-nav');
var procurementMegaBox = document.getElementById('procurement-drop');

procurementNavLink.addEventListener('click', function (e) {
  e.preventDefault();

  var isDropdownVisible = procurementMegaBox.classList.contains('show');

  if (isDropdownVisible) {
    procurementMegaBox.classList.remove('show');
  } else {
    procurementMegaBox.classList.add('show');
  }
});

document.addEventListener('click', function (e) {
  var isOutsideClick = !procurementNavLink.contains(e.target) && !procurementMegaBox.contains(e.target);

  if (isOutsideClick) {
    procurementMegaBox.classList.remove('show');
  }
});

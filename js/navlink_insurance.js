// js2.js
var insuranceNavLink = document.getElementById('insurance-nav');
var insuranceMegaBox = document.getElementById('insurance-drop');

insuranceNavLink.addEventListener('click', function (e) {
  e.preventDefault();

  var isDropdownVisible = insuranceMegaBox.classList.contains('show');

  if (isDropdownVisible) {
    insuranceMegaBox.classList.remove('show');
  } else {
    insuranceMegaBox.classList.add('show');
  }
});

document.addEventListener('click', function (e) {
  var isOutsideClick = !insuranceNavLink.contains(e.target) && !insuranceMegaBox.contains(e.target);

  if (isOutsideClick) {
    insuranceMegaBox.classList.remove('show');
  }
});

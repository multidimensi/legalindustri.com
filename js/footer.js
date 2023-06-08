var footerLegal = document.getElementById('footer-legal');
var legalDrop = document.getElementById('legal-drop');

footerLegal.addEventListener('click', function (e) {
  e.preventDefault();

  var isDropdownVisible = legalDrop.classList.contains('show');

  if (isDropdownVisible) {
    legalDrop.classList.remove('show');
  } else {
    legalDrop.classList.add('show');
  }
});

document.addEventListener('click', function (e) {
  var isOutsideClick = !footerLegal.contains(e.target) && !legalDrop.contains(e.target);

  if (isOutsideClick) {
    legalDrop.classList.remove('show');
  }
});

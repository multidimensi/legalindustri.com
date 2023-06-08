const slider = document.querySelector('.slider-image');
const sliderText = document.querySelector('.slider-text');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let sectionIndex = 0;
let autoPlayInterval;

function moveToIndex(index) {
  sectionIndex = index;
  slider.style.transform = 'translate(' + sectionIndex * -20 + '%)';
  sliderText.style.transform = 'translate(' + sectionIndex * -20 + '%)';
}

function moveRight() {
  sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 0; // Kembali ke indeks awal jika mencapai batas akhir
  moveToIndex(sectionIndex);
}

function moveLeft() {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 4; // Kembali ke indeks akhir jika mencapai indeks awal
  moveToIndex(sectionIndex);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(moveRight, 3000); // Pindah ke kanan setiap 3 detik
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

// Memulai autoplay saat halaman dimuat
startAutoPlay();

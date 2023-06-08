// dropdown
// Ambil elemen-elemen yang diperlukan
const nav10 = document.getElementById('nav10');
const nav11 = document.getElementById('nav11');
const nav12 = document.getElementById('nav12');
const image3 = document.getElementById('image3');

// Gambar default
const defaultImage3 = '/img/DGM.svg';

// Tambahkan event listener pada link navigasi 4
nav10.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image3.src = '/img/web development.svg';
});

nav4.addEventListener('mouseover', () => {
  image3.src = '/img/web development.svg';
});

nav4.addEventListener('mouseout', () => {
  image3.src = defaultImage3;
});

// Tambahkan event listener pada link navigasi 5
nav11.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image3.src = '/img/video motion.svg';
});

nav11.addEventListener('mouseover', () => {
  image3.src = '/img/video motion.svg';
});

nav11.addEventListener('mouseout', () => {
  image3.src = defaultImage3;
});

// Tambahkan event listener pada link navigasi 6
nav12.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image3.src = '/img/social media.svg';
});

nav6.addEventListener('mouseover', () => {
  image3.src = '/img/social media.svg';
});

nav6.addEventListener('mouseout', () => {
  image3.src = defaultImage3;
});

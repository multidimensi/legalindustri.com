// dropdown
// Ambil elemen-elemen yang diperlukan
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const image = document.getElementById('image');

// Gambar default
const defaultImage = '/img/gambar.svg';

// Tambahkan event listener pada link navigasi 1
nav1.addEventListener('mouseover', () => {
  image.src = '/img/gambar 1.svg';
});

nav1.addEventListener('mouseout', () => {
  image.src = defaultImage;
});

// Tambahkan event listener pada link navigasi 2
nav2.addEventListener('mouseover', () => {
  image.src = '/img/gambar 2.svg';
});

nav2.addEventListener('mouseout', () => {
  image.src = defaultImage;
});

// Tambahkan event listener pada link navigasi 3
nav3.addEventListener('mouseover', () => {
  image.src = '/img/gambar 3.svg';
});

nav3.addEventListener('mouseout', () => {
  image.src = defaultImage;
});

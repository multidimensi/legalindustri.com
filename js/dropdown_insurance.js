// dropdown
// Ambil elemen-elemen yang diperlukan
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');
const nav6 = document.getElementById('nav6');
const nav7 = document.getElementById('nav7');
const nav8 = document.getElementById('nav8');
const nav9 = document.getElementById('nav9');
const image2 = document.getElementById('image2');

// Gambar default
const defaultImage2 = '/img/INSURANCE.svg';

// Tambahkan event listener pada link navigasi 4
nav4.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image2.src = '/img/LIFE INSURANCE.svg';
});

nav4.addEventListener('mouseover', () => {
  image2.src = '/img/LIFE INSURANCE.svg';
});

nav4.addEventListener('mouseout', () => {
  image2.src = defaultImage2;
});

// Tambahkan event listener pada link navigasi 5
nav5.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image2.src = '/img/Health Insurance.svg';
});

nav5.addEventListener('mouseover', () => {
  image2.src = '/img/Health Insurance.svg';
});

nav5.addEventListener('mouseout', () => {
  image2.src = defaultImage2;
});

// Tambahkan event listener pada link navigasi 6
nav6.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image2.src = '/img/Vehicle Insurance.svg';
});

nav6.addEventListener('mouseover', () => {
  image2.src = '/img/Vehicle Insurance.svg';
});

nav6.addEventListener('mouseout', () => {
  image2.src = defaultImage2;
});

// Tambahkan event listener pada link navigasi 7
nav7.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image2.src = '/img/Property Insurance.svg';
});

nav7.addEventListener('mouseover', () => {
  image2.src = '/img/Property Insurance.svg';
});

nav7.addEventListener('mouseout', () => {
  image2.src = defaultImage2;
});

// Tambahkan event listener pada link navigasi 8
nav8.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image2.src = '/img/Travel Insurance.svg';
});

nav8.addEventListener('mouseover', () => {
  image2.src = '/img/Travel Insurance.svg';
});

nav8.addEventListener('mouseout', () => {
  image2.src = defaultImage2;
});

// Tambahkan event listener pada link navigasi 9
nav9.addEventListener('click', (event) => {
  event.preventDefault(); // Menghentikan perilaku default dari link
  image2.src = '/img/Business Insurance.svg';
});

nav9.addEventListener('mouseover', () => {
  image2.src = '/img/Business Insurance.svg';
});

nav9.addEventListener('mouseout', () => {
  image2.src = defaultImage2;
});

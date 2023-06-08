// Fungsi untuk menangani perubahan posisi saat menggulir
function handleScroll() {
  // Ambil posisi guliran vertikal saat ini
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Ambil lebar layar saat ini
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  // Tentukan media query untuk layar desktop atau laptop
  const isDesktop = screenWidth >= 980;

  // Ambil elemen header dan section
  const header = document.querySelector('.nav-top');
  const section = document.querySelector('.nav-bottom');

  // Jika posisi guliran melebihi offset atas elemen header dan layar adalah desktop
  if (scrollTop > header.offsetHeight && isDesktop) {
    // Sembunyikan header
    header.style.opacity = '0';
    header.style.pointerEvents = 'none';
    // Tambahkan kelas 'sticky' pada section untuk mengubah posisinya
    section.classList.add('sticky');
  } else {
    // Tampilkan kembali header
    header.style.opacity = '1';
    header.style.pointerEvents = 'auto';
    // Hapus kelas 'sticky' pada section untuk mengembalikan posisinya
    section.classList.remove('sticky');
  }
}

// Panggil fungsi handleScroll saat menggulir
window.addEventListener('scroll', handleScroll);

// navbar top
// search-box open close js code
let navbar = document.getElementById('navbar');
let searchIcon = document.getElementById('search-icon');
let searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', () => {
  navbar.classList.toggle('showInput');
  if (navbar.classList.contains('showInput')) {
    searchIcon.classList.replace('bx-search', 'bx-x');
    searchInput.focus();
  } else {
    searchIcon.classList.replace('bx-x', 'bx-search');
  }
});

// search-box open close js code 2
let etcBar = document.getElementById('etc-bar');
let iconSearch = document.getElementById('icon-search');
let inputSearch = document.getElementById('input-search');

iconSearch.addEventListener('click', () => {
  etcBar.classList.toggle('inputShow');
  if (etcBar.classList.contains('inputShow')) {
    iconSearch.classList.replace('bx-search', 'bx-x');
    inputSearch.focus();
  } else {
    iconSearch.classList.replace('bx-x', 'bx-search');
  }
});

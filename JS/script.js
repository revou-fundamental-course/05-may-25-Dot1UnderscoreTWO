// script.js

// Fungsi untuk slideshow otomatis
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
  });

  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000); // Ubah gambar setiap 3 detik
}

// Jalankan slideshow saat halaman dimuat
document.addEventListener("DOMContentLoaded", showSlides);

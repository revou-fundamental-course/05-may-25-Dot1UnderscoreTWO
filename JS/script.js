// Auto Slide Banner
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.display = "none";
  });

  slides[slideIndex].classList.add("active");
  slides[slideIndex].style.display = "block";

  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();

  // Validasi Form
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const interest = document.getElementById("interest");

    if (!name.value.trim()) {
      alert("Nama harus diisi!");
      name.focus();
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      alert("Masukkan email yang valid!");
      email.focus();
      return;
    }

    if (!interest.value) {
      alert("Pilih destinasi terlebih dahulu.");
      interest.focus();
      return;
    }

    alert("Terima kasih! Data Anda telah dikirim.");
    form.reset();
  });
});

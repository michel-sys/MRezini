document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 1;

  function showSlide(index) {
    document.getElementById(`Slide${index}`).checked = true;
  }

  function nextSlide() {
    currentSlide = (currentSlide % 4) + 1;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000);
});


function redirectToTelegram() {
  window.location.href = "https://t.me/MichelRezini";
}
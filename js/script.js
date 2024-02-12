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


function getLikeCount() {
  return localStorage.getItem('likeCount') || '0';
}


function updateLikeCount(count) {
  localStorage.setItem('likeCount', count);
}

function updateLikeCountDisplay(count) {
  document.getElementById('likeCount').textContent = ' - ' + count;
}

function gostei() {
  var button = document.getElementById('cg');
  var likeCount = parseInt(getLikeCount(), 10);

  if (button.classList.contains('like2')) {
    button.classList.remove('like2');
    button.classList.add('like4');
    likeCount++;
  } else {
    button.classList.remove('like4');
    button.classList.add('like2');
    likeCount--;
  }

  updateLikeCount(likeCount);
  updateLikeCountDisplay(likeCount);
}

window.onload = function() {
  updateLikeCountDisplay(getLikeCount());
};




function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez para exibir o horário inicial
updateClock();
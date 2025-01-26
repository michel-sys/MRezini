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



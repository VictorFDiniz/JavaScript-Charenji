  const images = [
    "url('../Countdown/source/images/ween01.avif')",
    "url('../Countdown/source/images/ween02.avif')",
    "url('../Countdown/source/images/ween03.avif')",
    "url('../Countdown/source/images/ween04.avif')",
    "url('../Countdown/source/images/ween05.avif')",
  ]

const body = document.querySelector('body')

function randombg() {

  const bg = images[Math.floor(Math.random() *
  images.length)];
  body.style.backgroundImage = bg;
}

  setInterval(randombg, 8000)
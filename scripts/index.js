function caliberateCardHeight() {
  const height = document.querySelector(".card-holder").offsetHeight;

  document.querySelector(".border").style.height = `${height * (103 / 100)}px`;
}

window.addEventListener("resize", caliberateCardHeight);
caliberateCardHeight();

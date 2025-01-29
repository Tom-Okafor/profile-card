function caliberateCardHeight() {
  const height = document.querySelector(".card-holder").offsetHeight;

  document.querySelector(".border").style.height = `${height * (103 / 100)}px`;
}

function setUTCTime() {
  const DATE = new Date();
  const HOUR = DATE.getUTCHours();
  const MINUTES = DATE.getUTCMinutes();
  let convertedHour;
  let dayPeriod;
  if (HOUR > 12) {
    convertedHour = HOUR - 12;
    dayPeriod = "PM";
  } else {
    convertedHour = HOUR;
    dayPeriod = "AM";
  }
  return `${convertedHour} : ${MINUTES} ${dayPeriod}`;
}

document.getElementById("time").innerText = setUTCTime();

window.addEventListener("resize", caliberateCardHeight);
caliberateCardHeight();

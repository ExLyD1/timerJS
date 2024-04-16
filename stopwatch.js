const hours = document.querySelector("#timer_hours");
const minutes = document.querySelector("#timer_minutes");
const seconds = document.querySelector("#timer_seconds");
const milliseconds = document.querySelector("#timer_milliseconds");
const btnStart = document.querySelector("#timer_button_start");
const btnStop = document.querySelector("#timer_button_stop");
const btnBreak = document.querySelector("#timer_button_break");

let id;
let startNumberHours = 0;
let startNumberMinutes = 0;
let startNumberSeconds = 0;
let startNumberMilliSeconds = 0;


function secondsStart() {
  milliseconds.innerHTML = "МилиСекунды: " + startNumberMilliSeconds;
  startNumberMilliSeconds++;
  if (startNumberMilliSeconds>98) {
    startNumberSeconds++;
    seconds.innerHTML = "Секунды: " + startNumberSeconds;
    startNumberMilliSeconds = 0;
  }
  else if (startNumberSeconds>58) {
    startNumberMinutes++;
    minutes.innerHTML = "Минуты: " + startNumberMinutes;
    startNumberSeconds = 0;
  }
  else if (startNumberMinutes>59) {
    startNumberMinutes = 0;
    startNumberHours++;
    hours.innerHTML = "Часы: " + startNumberHours;
  }
}

btnStart.addEventListener("click", event=>{
  clearInterval(id)
  id = setInterval(secondsStart,10);
})

btnStop.addEventListener("click", event=>{
  clearInterval(id)
})

btnBreak.addEventListener("click", event=>{
  clearInterval(id)
  startNumberHours = 0;
  startNumberMinutes = 0;
  startNumberSeconds = 0;
  startNumberMilliSeconds = 0;
  milliseconds.innerHTML = "МилиСекунды: " + startNumberMilliSeconds;
  seconds.innerHTML = "Секунды: " + startNumberSeconds;
  minutes.innerHTML = "Минуты: " + startNumberMinutes;
  hours.innerHTML = "Часы: " + startNumberHours;
})

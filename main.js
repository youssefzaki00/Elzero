

// up button 
let up = document.querySelector("#up-scroll");
// Start Skills progress
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");
//  Stats Section
let numbers = document.querySelectorAll(".stats .box .number");
let stats = document.querySelector(".stats")
let started = false;
window.onscroll = function () {
  // Start Skills progress
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach(span => {
      span.style.width = span.dataset.width;
    });
  };
  // up button 
  if (window.scrollY >= 300) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  };
  // Stats Section

  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      numbers.forEach((number) => startCount(number));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal)
}
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Start Event count down


let countDown = new Date(`January 24, 2023 6:00:00`).getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let trueDate = countDown - dateNow;


  let days = Math.floor(trueDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor(trueDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(trueDate % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(trueDate % (1000 * 60) / (1000));

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (trueDate < 0) {
    clearInterval(counter);

  }
}, 1000);

let otherLinks = document.querySelector(".hidden");
let menu = document.querySelector(".menu");
let sections = document.body


otherLinks.addEventListener("click", () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else if (menu.classList.contains("showMenu") == false) {
    menu.classList.add("showMenu");
  }
})

let Sec = document.querySelector('.Sec')
Sec.addEventListener("click", () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  }
})
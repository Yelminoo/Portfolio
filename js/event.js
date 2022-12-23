const typedText = document.querySelector(".typed-text");

const textArr = [
  "web-designer",
  "back-end developer",
  "vue js and laravel developer",
  "freelancer",
];
const cursorSpan = document.querySelector(".span-cursor");
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArr[textArrIndex].length) {
    if (!cursorSpan.classList.contains("animate__animated"))
      cursorSpan.classList.add("animate__animated");
    typedText.textContent += textArr[textArrIndex].charAt(charIndex);
    charIndex++;

    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("animate__animated");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("animate__animated"))
      cursorSpan.classList.add("animate__animated");
    typedText.textContent = textArr[textArrIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("animate__animated");
    textArrIndex++;
    if (textArrIndex >= textArr.length) textArrIndex = 0;

    setTimeout(type, newTextDelay);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (textArr.length) setTimeout(type, newTextDelay + 250);
});

//intersection pop up start
let animas = document.querySelectorAll(".ani");

const options = {
  rootMargin: "-10% 0px",
  threshold: 0.5,
};

function handleIntersect(entries) {
  console.log(entries);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
}
const observer = new IntersectionObserver(handleIntersect, options);

animas.forEach((anima) => {
  observer.observe(anima);
});

//intersection pop up end

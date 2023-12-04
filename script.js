const homeLink = document.querySelector("#home-link");
const aboutLink = document.querySelector("#about-link");
const projectsLink = document.querySelector("#projects-link");
const projectsSlide = document.querySelector(".projects");
const heroSlide = document.querySelector(".hero");
const aboutSlide = document.querySelector(".about");
const emailLink = document.querySelector(".email-address-link");
const frontEnd = document.querySelector("#front-end-text");
const email = document.querySelector("#email-text");
const projectButtonOne = document.querySelector(".first-project");
const projectButtonTwo = document.querySelector(".second-project");
const projectButtonThree = document.querySelector(".third-project");
const projectOne = document.querySelector(".card-one");
const projectTwo = document.querySelector(".card-two");
const projectThree = document.querySelector(".card-three");
const themeOne = document.querySelector(".theme-one");
const themeTwo = document.querySelector(".theme-two");
const themeThree = document.querySelector(".theme-three");
const root = document.documentElement;
const hamburgerIcon = document.querySelector(".bar-container");

const nav = document.querySelector("nav");

function showSlide(slideToShow) {
  heroSlide.classList.add("hidden");
  projectsSlide.classList.add("hidden");
  aboutSlide.classList.add("hidden");
  slideToShow.classList.remove("hidden");
}

homeLink.addEventListener("click", function () {
  showSlide(heroSlide);
});

aboutLink.addEventListener("click", function () {
  showSlide(aboutSlide);
});

projectsLink.addEventListener("click", function () {
  showSlide(projectsSlide);
});

emailLink.addEventListener("click", function () {
  frontEnd.classList.toggle("hidden");
  email.classList.toggle("hidden");
});

function showProject(projectToShow) {
  projectOne.classList.add("hidden");
  projectTwo.classList.add("hidden");
  projectThree.classList.add("hidden");
  projectToShow.classList.remove("hidden");
}

projectButtonOne.addEventListener("click", function () {
  showProject(projectOne);
});

projectButtonTwo.addEventListener("click", function () {
  showProject(projectTwo);
});
projectButtonThree.addEventListener("click", function () {
  showProject(projectThree);
});

function setTheme(textColor, backgroundColor, primaryColor) {
  root.style.setProperty("--text", textColor);
  root.style.setProperty("--background", backgroundColor);
  root.style.setProperty("--primary", primaryColor);
}

themeOne.addEventListener("click", function () {
  setTheme("#f3f7f3", "#121c13", "#1ee6d5");
});

themeTwo.addEventListener("click", function () {
  setTheme("#050605", "#EFF1EE", "#E4290C");
});

themeThree.addEventListener("click", function () {
  setTheme("#FDFCFD", "#18101E", "#7C519E");
});

function showDescription(num, func) {
  document
    .querySelector(`.description-link--${num}`)
    .addEventListener("click", () => {
      document.querySelector(`.description--${num}`).classList.toggle("hidden");
      document.querySelector(".close-button").classList.toggle("hidden");
    });
}

function close(num) {
  document
    .querySelector(".close-button-link")
    .addEventListener("click", (event) => {
      document.querySelector(`.description--${num}`).classList.add("hidden");
      document.querySelector(".close-button").classList.add("hidden");
      event.preventDefault();
    });
  document
    .querySelector(".close-button-link")
    .addEventListener("keydown", () => {
      document.querySelector(`.description--${num}`).classList.add("hidden");
      document.querySelector(".close-button").classList.add("hidden");
    });
  document
    .querySelector(`.description--${num}`)
    .addEventListener("click", () => {
      document.querySelector(`.description--${num}`).classList.add("hidden");
      document.querySelector(".close-button").classList.add("hidden");
    });
  document
    .querySelector(`.description--${num}`)
    .addEventListener("keydown", () => {
      document.querySelector(`.description--${num}`).classList.add("hidden");
      document.querySelector(".close-button").classList.add("hidden");
    });
}

showDescription(1, close(1));
showDescription(2, close(2));
showDescription(3, close(3));

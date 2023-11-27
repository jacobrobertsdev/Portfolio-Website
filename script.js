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

function showSlide(slideToShow) {
  heroSlide.classList.add("hidden");
  projectsSlide.classList.add("hidden");
  aboutSlide.classList.add("hidden");
  setTimeout(() => {
    slideToShow.classList.remove("hidden");
  }, 100);
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

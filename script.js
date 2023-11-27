const homeLink = document.querySelector("#home-link");
const aboutLink = document.querySelector("#about-link");
const projectsLink = document.querySelector("#projects-link");
const projectsSlide = document.querySelector(".projects");
const heroSlide = document.querySelector(".hero");
const aboutSlide = document.querySelector(".about");
const emailLink = document.querySelector(".email-address-link");
const frontEnd = document.querySelector("#front-end-text");
const email = document.querySelector("#email-text");

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

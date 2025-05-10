const projectsSlide = document.querySelector(".projects");
const heroSlide = document.querySelector(".hero");
const aboutSlide = document.querySelector(".about");
const contactSlide = document.querySelector(".contact");
const contactForm = document.querySelector(".contact-form");
const projectOne = document.querySelector(".card-one");
const projectTwo = document.querySelector(".card-two");
const projectThree = document.querySelector(".card-three");
const root = document.documentElement;


// Fetch GitHub profile data on initial load
fetch('https://api.github.com/users/jacobrobertsdev')
  .then(response => response.json())
  .then(data => {
    const profilePic = document.querySelector('#github-profile-pic');
    profilePic.src = data.avatar_url;
    profilePic.classList.remove("hidden");
    typeBio(data.bio);
  })
  .catch(error => {
    console.error('Error fetching GitHub profile picture:', error);
  });

async function typeBio(message) {
  let bio = document.querySelector(".github-bio");
  bio.textContent = "";
  for (let char of message) {
    bio.textContent += char;
    await new Promise(resolve => setTimeout(resolve, 150)); // 50ms delay per character
  }
}

//---Pages---//
function showSlide(slideToShow) {
  heroSlide.classList.add("hidden");
  projectsSlide.classList.add("hidden");
  aboutSlide.classList.add("hidden");
  contactSlide.classList.add("hidden");
  slideToShow.classList.remove("hidden");
}

//---Projects---//
function showProject(projectToShow) {
  projectOne.classList.add("hidden");
  projectTwo.classList.add("hidden");
  projectThree.classList.add("hidden");
  projectToShow.classList.remove("hidden");
}

document.querySelector(".first-project").addEventListener("click", function () {
  showProject(projectOne);
});

document.querySelector(".second-project").addEventListener("click", function () {
  showProject(projectTwo);
});

document.querySelector(".third-project").addEventListener("click", function () {
  showProject(projectThree);
});

//---Themes---//
function setTheme(textColor, backgroundColor, primaryColor) {
  root.style.setProperty("--text", textColor);
  root.style.setProperty("--background", backgroundColor);
  root.style.setProperty("--primary", primaryColor);
}

document.querySelector(".theme-one").addEventListener("click", function () {
  setTheme("#f3f7f3", "#112A42", "#1ee6d5");
});

document.querySelector(".theme-two").addEventListener("click", function () {
  setTheme("#050605", "#EFF1EE", "#E4290C");
});

document.querySelector(".theme-three").addEventListener("click", function () {
  setTheme("#FDFCFD", "#18101E", "#7C519E");
});

//---Project Descriptions---//
function setupDescription(num) {
  const descriptionLink = document.querySelector(`.description-link--${num}`);
  const description = document.querySelector(`.description--${num}`);
  const closeButton = document.querySelector(".close-button");
  const closeButtonLink = document.querySelector(".close-button-link");

  // Show/hide description on link click
  descriptionLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    description.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
  });

  // Close description on close button click
  closeButtonLink.addEventListener("click", (event) => {
    event.preventDefault();
    description.classList.add("hidden");
    closeButton.classList.add("hidden");
  });

  // Close description on close button keypress (e.g., Enter or Space)
  closeButtonLink.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      description.classList.add("hidden");
      closeButton.classList.add("hidden");
    }
  });
}

// Set up descriptions for each project
setupDescription(1);
setupDescription(2);
setupDescription(3);

//---Navigation / Routing---//
function navigateToHash() {
  const hash = window.location.hash.substring(1);

  if (hash === "about") {
    showSlide(aboutSlide);
  } else if (hash === "projects") {
    showSlide(projectsSlide);
  } else if (hash === "contact") {
    showSlide(contactSlide);
  } else {
    showSlide(heroSlide);
  }
}

document.querySelector("#home-link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  showSlide(heroSlide);
  history.pushState(null, null, "#home");
});

document.querySelector("#about-link").addEventListener("click", function (event) {
  event.preventDefault();
  showSlide(aboutSlide);
  history.pushState(null, null, "#about");
});

document.querySelector("#projects-link").addEventListener("click", function (event) {
  event.preventDefault();
  showSlide(projectsSlide);
  history.pushState(null, null, "#projects");
});

document.querySelector("#contact-link").addEventListener("click", function (event) {
  event.preventDefault();
  showSlide(contactSlide);
  history.pushState(null, null, "#contact");
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(contactForm);

  fetch('https://formspree.io/f/xvgarlnn', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        contactForm.reset();
        window.location.href = "#home";
        navigateToHash();
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("There was an error submitting the form. Please try again.");
    });
});

// Event listener for popstate to handle back/forward navigation
window.addEventListener("popstate", function () {
  navigateToHash();
});
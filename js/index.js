const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav_link");
const skills = document.querySelectorAll(".skills-container figure");
const skillsC = document.querySelector(".skills-container");

// Open hamburger
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Toggle icon colors
function toggleColor(e) {
  if (e.target.classList.contains("icon")) {
    e.target.classList.toggle("colored");
  }
}

// Hover effects on Icons
skillsC.addEventListener("mouseover", function (e) {
  console.log(e);
  toggleColor(e);
});
skillsC.addEventListener("mouseout", function (e) {
  toggleColor(e);
});

function goBack() {
  window.history.back();
}

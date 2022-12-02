// Plugins
gsap.registerPlugin(ScrollTrigger);

// Elements
// Nav elements
const navBar = document.querySelector("nav");

// Landing page
const header = document.querySelector("header");
const headerLogo = document.querySelector(".header-top");
const backgroundImage = document.querySelector(".landing-image");

// About section elements
const aboutSection = document.querySelector("#about-section");
const aboutSectionContentDivs = document.querySelectorAll(".content");
const aboutSectionHeading = aboutSection.querySelector("h2");

//Car section elements
const carSections = document.querySelectorAll(".car-section");

// Adding scrolled style to navbar
window.addEventListener("scroll", () => {
  window.scrollY
    ? navBar.classList.add("nav-scrolled")
    : navBar.classList.remove("nav-scrolled");
});

//Landing page animations
gsap.from([backgroundImage, headerLogo], {
  opacity: 0,
  stagger: 0.75,
  duration: 1,
});

//About section animations
gsap.from(aboutSectionHeading, {
  y: 50,
  opacity: 0,
  duration: 0.1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: aboutSection,
    start: "top center",
    end: "center bottom",
    scrub: 0.5,
  },
});
gsap.from(aboutSectionContentDivs, {
  y: 200,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: aboutSection,
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});

// Car section animations
carSections.forEach((section) => {
  const sectionLeft = section.querySelector(".left");
  const sectionRight = section.querySelector(".right");

  gsap.from(sectionLeft, {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom bottom",
      scrub: 1.5,
    },
  });

  gsap.from(sectionRight, {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom bottom",
      scrub: 1.5,
    },
  });
});

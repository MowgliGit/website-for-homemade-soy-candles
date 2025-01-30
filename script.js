//Make Mobile Navigation work
document.addEventListener("DOMContentLoaded", () => {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });
});
//Passing Arguments to Event Handlers
const nav = document.querySelector(".main-nav");

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link.closest(".header").querySelectorAll(".main-nav-link");
    const logo = link.closest(".header").querySelector(".logo");

    siblings.forEach(function (el) {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link.closest(".header").querySelectorAll(".main-nav-link");
    const logo = link.closest(".header").querySelector(".logo");

    siblings.forEach(function (el) {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});
//end of Passing Arguments to Event Handlers

//Implementing a Sticky Navigation: The Scroll Event

const sectionAbout = document.querySelector(".section-about");
const initiaLCoords = sectionAbout.getBoundingClientRect();

window.addEventListener("scroll", function (e) {
  document.querySelectorAll(".main-nav-link").forEach(function (el) {
    if (window.scrollY >= sectionAbout.offsetTop) {
      header.classList.remove("headerStyle");
      header.classList.add("sticky");
      header.style.transparent = 0.5;
      el.style.color = "#fff";
    } else {
      header.classList.remove("sticky");
      el.style.color = "#333";
    }
  });
});

//Implementing color Navigation Only at IndexHtml
const header = document.querySelector(".header");
const scrollPosition = window.scrollY;
const IndexHtml = document.querySelector(".main-page");

document.querySelector(".header").addEventListener("click", function (e) {
  console.log(sectionAbout.offsetTop);
  console.log(scrollPosition);

  if (window.scrollY < sectionAbout.offsetTop) {
    e.currentTarget.classList.toggle("headerStyle");

    document.querySelectorAll(".main-nav-link").forEach(function (el) {
      if (header.classList.contains("headerStyle")) {
        el.style.color = "#fff";
      } else {
        el.style.color = "#333";
      }
    });
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY < sectionAbout.offsetTop) {
    document.querySelectorAll(".main-nav-link").forEach(function (link) {
      if (header.classList.contains("headerStyle")) {
        link.style.color = "#fff";
      } else {
        link.style.color = "#333";
      }
    });
  }
});

//Implementing Smooth Scrolling

document.addEventListener("DOMContentLoaded", () => {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".main-nav-link");

  btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      headerEl.classList.remove("nav-open");

      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - headerEl.offsetHeight,
          behavior: "smooth",
        });
      }
    });
  });
});

// //Implementing Smooth Scrolling FOR NAVIGATION

document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("main-nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
// //Implementing Smooth Scrolling QUICKLINKS

document.querySelector(".quick-links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("quick-link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
// ALERT

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("THANK YOU FOR VISITING OUR WEBSITE FOR HOMEMADE SOY CANDLES");
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 6000);

//Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//TESTIMONIAL CONTAINER

const btnContainer = document.querySelector(".btn-container");
const btns = document.querySelectorAll(".btn-operations");
const testContainer = document.querySelectorAll(".testimonial-container");

btnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn-operations");
  if (!clicked) return;

  btns.forEach(function (b) {
    b.classList.remove("btn-operations--active");
  });
  testContainer.forEach(function (t) {
    t.classList.remove("testimonial-container--active");
  });

  clicked.classList.add("btn-operations--active");

  document
    .querySelector(`.testimonial-container--${clicked.dataset.tab}`)
    .classList.add("testimonial-container--active");

  console.log(clicked.dataset.tab);
});

// Add sticky class on scroll
// const header = document.querySelector(".header");
const heroSection = document.querySelector(".section-hero");

function checkScroll() {
  const heroBottom = heroSection.getBoundingClientRect().bottom;

  // Add or remove the sticky class based on scroll position
  if (heroBottom < 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// mobile navigation
// const menuButton = document.querySelector(".btn-mobile-nav"); //
// const mainNav = document.querySelector(".main-nav"); // The mobile
// const navLinks = document.querySelectorAll(".main-nav-link"); //

// menuButton.addEventListener("click", function () {
//   document.body.classList.toggle("nav-open");
// });

// // Close the menu when any nav link is clicked
// navLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     document.body.classList.remove("nav-open");
//   });
// });
const menuButton = document.querySelector(".btn-mobile-nav");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav-link");

// Toggle the menu when the menu button is clicked
menuButton.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
});

// Close the menu when any nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.body.classList.remove("nav-open");

    // Scroll smoothly to the section
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top:
          targetSection.offsetTop -
          document.querySelector(".header").offsetHeight,
        behavior: "smooth",
      });
    }
  });
});

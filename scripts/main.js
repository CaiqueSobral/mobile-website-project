/*  Open and close menu */
const btnNavEl = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open");
});

// smooth scrolling animation
const allLinks = document.querySelectorAll("nav a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close the mobile navigation
    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("open");
    }
  });
});

// Fixed navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "15px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#hero .hero-img, #hero .hero-text,#hero .hero-text .heading-primary,  #hero .hero-text .hero-description
  #about .about-title,
  #about .about-title .subheading,
  #about .about-title heading-secondary,
  #about .img, #about grid-about, #about .regular-text
  #services .services-title,
  #services .services-title .subheading,
  #services .services-title .heading-secondary,
  .services-card, .heading-tertiary, .card-text, .icon-services
  `,
  { interval: 50 }
);

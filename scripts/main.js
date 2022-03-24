/*  Open and close menu */
const btnNavEl = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open");
});

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul il a");

for (const link of links) {
  link.addEventListener("click", function () {
    headerEl.classList.toggle("open");
  });
}

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
    rootMargin: "-100px",
  }
);
observer.observe(sectionHeroEl);

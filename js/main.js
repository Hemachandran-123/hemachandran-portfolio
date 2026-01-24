AOS.init({
  duration: 900,
  once: true
});

/* Navbar background change on scroll */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.background = window.scrollY > 50 
    ? "rgba(2,6,23,0.95)" 
    : "rgba(11,15,25,0.95)";
});

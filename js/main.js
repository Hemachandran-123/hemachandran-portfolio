AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 80
});

/* Navbar subtle shadow on scroll */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 60) {
    header.style.boxShadow = "0 4px 20px rgba(15,23,42,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

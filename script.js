document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const nav = document.querySelector(".header nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Tutup navigasi" : "Buka navigasi");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  // Scroll reveal; menghormati pengaturan reduced motion.
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), {threshold: .12, rootMargin: "0px 0px -30px 0px"});
    items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add("visible"));

  // Penanda menu sesuai bagian yang terlihat.
  if ("IntersectionObserver" in window) {
    const links = document.querySelectorAll(".header nav a");
    const sections = document.querySelectorAll("main section[id]");
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) links.forEach(link => link.classList.toggle("active", link.hash === "#" + entry.target.id));
    }), {rootMargin:"-30% 0px -60% 0px"});
    sections.forEach(section => sectionObserver.observe(section));
  }
  document.getElementById("print")?.addEventListener("click", () => window.print());
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
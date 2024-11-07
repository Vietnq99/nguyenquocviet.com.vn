function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Đóng menu khi nhấp bên ngoài menu
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  }, { once: true });
}

// Đóng menu khi cuộn trang
window.addEventListener("scroll", () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

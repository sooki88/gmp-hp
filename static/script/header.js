// 헤더 자바스크립트
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#header-area").innerHTML = data;

      const logo = document.querySelector(".logo");
      const navLinks = document.querySelectorAll(".header nav ul li a");
      const loginButtons = document.querySelectorAll(
        ".button-container button"
      );
      const menuButton = document.querySelector(".menus");
      const currentPath = window.location.pathname;

      const lightPaths = ["/", "/brand", "/partnership", "/api"];
      const darkPaths = ["/pay", "/support"];

      if (lightPaths.some((path) => currentPath === path)) {
        navLinks.forEach((link) => {
          link.classList.add("light");
          link.classList.remove("dark");
        });
        logo.src = "../images/logo_light.svg";
        loginButtons.forEach((button) => {
          button.classList.add("light");
          button.classList.remove("dark");
        });
        menuButton.sic = "../images/menu_light.svg";
      } else if (darkPaths.some((path) => currentPath === path)) {
        navLinks.forEach((link) => {
          link.classList.add("dark");
          link.classList.remove("light");
        });
        logo.src = "../images/logo_dark.svg";
        loginButtons.forEach((button) => {
          button.classList.add("dark");
          button.classList.remove("light");
        });
        menuButton.sic = "../images/menu_dark.svg";
      }
    })
    .catch((err) => console.error("header를 불러오는 중 에러 발생", err));
});

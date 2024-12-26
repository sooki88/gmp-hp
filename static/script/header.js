// 헤더 자바스크립트
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#header-area").innerHTML = data;

      const header = document.querySelector(".header");
      const logo = document.querySelector(".logo");
      const navLinks = document.querySelectorAll(".header nav ul li a");
      const loginButtons = document.querySelectorAll(
        ".button-container button"
      );
      const menuButton = document.querySelector(".menus img");
      const currentPath = window.location.pathname;

      const lightPaths = ["/", "/partnership", "/api"];
      const darkPaths = ["/brand", "/pay", "/support"];

      const setHeaderStyle = (path, isScrolled) => {
        // 현재 페이지가 ligthPath일 경우
        if (lightPaths.some((lightPath) => path === lightPath)) {
          header.style.backgroundColor = isScrolled ? "white" : "transparent";
          header.style.borderBottom = isScrolled ? "1px solid #E5EAF2" : "none";
          navLinks.forEach((link) => {
            link.classList.add("light");
            link.classList.remove("dark");
          });
          logo.src = "../images/logo_light.svg";
          loginButtons.forEach((button) => {
            button.classList.add("light");
            button.classList.remove("dark");
          });
          menuButton.src = "../images/menu_light.svg";

          // 현재 페이지가 darkPath일 경우
        } else if (darkPaths.some((darkPath) => path === darkPath)) {
          header.style.backgroundColor = isScrolled ? "#4B19B2" : "transparent";
          navLinks.forEach((link) => {
            link.classList.add("dark");
            link.classList.remove("light");
          });
          logo.src = "../images/logo_dark.svg";
          loginButtons.forEach((button) => {
            button.classList.add("dark");
            button.classList.remove("light");
          });
          menuButton.src = "../images/menu_dark.svg";
        }
      };

      // 초기 스타일 설정
      const isScrolled = window.scrollY > 0;
      setHeaderStyle(currentPath, isScrolled);

      // 스크롤 감지 이벤트 추가
      window.addEventListener("scroll", () => {
        const isScrolled = window.scrollY > 0;
        setHeaderStyle(currentPath, isScrolled);
      });
    })
    .catch((err) => console.error("header를 불러오는 중 에러 발생", err));
});

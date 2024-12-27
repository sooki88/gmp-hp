// 메인페이지 캐러셀 자바스크립트
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/carousel.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#carousel-area").innerHTML = data;
      initCarousel();
    })
    .catch((err) => console.error("carousel을 불러오는 중 에러 발생", err));
});

function initCarousel() {
  const activeClass = "active";
  const nowClass = "now";

  const slides = document.querySelectorAll(".slide");
  const navDots = document.querySelectorAll(".bar");
  const leftBtn = document.querySelector(".btn-left");
  const rightBtn = document.querySelector(".btn-right");

  let currentIndex = 0;

  const moveToSlide = (index) => {
    slides.forEach((slide) => slide.classList.remove(activeClass));
    navDots.forEach((dot) => dot.classList.remove(nowClass));

    slides[index].classList.add(activeClass);
    navDots[index].classList.add(nowClass);
  };

  // 왼쪽 슬라이드로 이동 버튼
  const moveLeft = () => {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    moveToSlide(currentIndex);
  };

  // 오른쪽 슬라이드로 이동 버튼
  const moveRight = () => {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    moveToSlide(currentIndex);
  };

  // 자동 슬라이드
  const autoSlide = () => {
    moveRight();
  };

  // 초기화
  const init = () => {
    // 첫 번째 슬라이드 활성화
    moveToSlide(0);

    leftBtn.addEventListener("click", moveLeft);
    rightBtn.addEventListener("click", moveRight);

    // 자동 슬라이드 실행
    setInterval(autoSlide, 3000);
  };

  init();
}

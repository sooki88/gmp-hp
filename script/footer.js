// 푸터 자바스크립트
document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#footer-area").innerHTML = data;
    })
    .catch((err) => console.error("footer를 불러오는 중 에러 발생, err"));
});

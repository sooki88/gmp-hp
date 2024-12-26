// 가맹점 가입 신청 배너
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/join-banner.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#join-banner-area").innerHTML = data;
    })
    .catch((err) => console.error("join-banner를 불러오는 중 에러 발생, err"));
});

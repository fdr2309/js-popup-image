const container = document.querySelector(".container");
const allImeges = document.querySelectorAll(".container .layout img");
const bigScreen = document.querySelector(".bigScreen");
const showImg = document.querySelector(".showImg");
const close = document.querySelector(".close");



allImeges.forEach((item) => {
  //   console.log(item);
  item.addEventListener("click", () => {
    console.log(item);
    bigScreen.classList.add("show");

    showImg.src = item.src;
  });
});

close.addEventListener("click", () => {
  bigScreen.classList.remove("show");
});

const container = document.querySelector(".container");
const allImeges = document.querySelectorAll(".container .layout img");
const bigScreen = document.querySelector(".bigScreen");
const showImg = document.querySelector(".showImg");
const close = document.querySelector(".close");

// fetch(`https://api.slingacademy.com/v1/sample-data/photos?limit=12`)
//   .then((res) => res.json())
//   .then((data) => {
//     let allPhotos = data.photos;
//     // console.log(allPhotos);

//     allPhotos.map((img) => {
//       let layout = document.createElement("div");
//       layout.classList.add("layout");

//       layout.innerHTML = `<img class = "img"
//         src="${img.url}"
//         alt=""
//         />`;

//       container.appendChild(layout);
//     });
//   });

console.log(allImeges);

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

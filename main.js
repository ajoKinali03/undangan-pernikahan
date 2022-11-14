// cover sistem
const btn = document.getElementsByClassName("btn")[0];
const containerCover = document.getElementsByClassName("container-cover")[0];
const errorDisplay = document.getElementsByClassName("error")[0];
const containerDisplay = document.getElementsByClassName("container")[0];


btn.addEventListener("click", () => {
  containerCover.style.transform = "translateY(-700px)";
  containerCover.style.opacity = "0";
  containerCover.style.transition = "1s";
  setTimeout(() => {
    containerCover.style.display = "none";
    containerCover.style.transform = "translateY(0)";
  }, 1000);
});

let wdth = window.innerWidth;
if (wdth <= 600) {
  errorDisplay.style.display = "none";
} else {
  containerDisplay.style.display = "none";
}

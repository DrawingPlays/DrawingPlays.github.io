let img = document.querySelector(".img");
let imagenes = ["tazas 1", "tazas 2", "tazas 3","tazas 4","tazas 5"];
let prenda = document.querySelector(".img");
let changeColor = document.querySelectorAll(".CC");

changeColor[0].addEventListener("click", () => {
  img.src = `./Imagenes/${imagenes[0]}.jpg`;
});
changeColor[1].addEventListener("click", () => {
  img.src = `./Imagenes/${imagenes[1]}.jpg`;
});
changeColor[2].addEventListener("click", () => {
  img.src = `./Imagenes/${imagenes[2]}.jpg`;
});
changeColor[3].addEventListener("click", () => {
  img.src = `./Imagenes/${imagenes[3]}.jpg`;
});
changeColor[4].addEventListener("click", () => {
  img.src = `./Imagenes/${imagenes[4]}.jpg`;
});

/*
let imagenes = ["imagen1", "imagen2"];
let prenda = document.querySelector(".img");
let changeColor = document.querySelectorAll(".CC");
CC[0].addEventListener("click", () => {
  img.src = "./Imagenes/camisamolde.jpg";
});
*/

let pito = document.querySelector(".logo");
let penesote = document.querySelectorAll(".changeColorw");
penesote[0].addEventListener("click", () => {
  pito.style.opacity = "0%";
});

penesote[1].addEventListener("click", () => {
  pito.style.opacity = "100%";
  pito.style.width = "500px";
  pito.style.height = "500px";
  pito.style.top = "10px";
  pito.style.left = "0";
});
penesote[2].addEventListener("click", () => {
  pito.style.opacity = "100%";
  pito.style.width = "550px";
  pito.style.height = "550px";
  pito.style.top = "-15px";
  pito.style.left = "-30px";
});
penesote[3].addEventListener("click", () => {
  pito.style.opacity = "100%";
  pito.style.width = "560px";
  pito.style.height = "560px";
  pito.style.top = "-25px";
  pito.style.left = "-40px";
});
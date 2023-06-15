let img = document.querySelector(".img");
let imagenes = ["gorro", "gorro 2", "gorro 3","gorro 4","gorro 5"];
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
  pito.style.width = "80px";
  pito.style.height = "80px";
  pito.style.top = "315px";
  pito.style.left = "200px";
});
penesote[2].addEventListener("click", () => {
  pito.style.opacity = "100%";
  pito.style.width = "110px";
  pito.style.height = "108px";
  pito.style.top = "160px";
  pito.style.left = "190px";
});
penesote[3].addEventListener("click", () => {
  pito.style.opacity = "100%";
  pito.style.width = "200px";
  pito.style.height = "180px";
  pito.style.top = "130px";
  pito.style.left = "145px";
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const backgroundColor=document.querySelector("body");
const but=backgroundColor.querySelector(".change-color");
const spTxt=backgroundColor.querySelector(".color");
but.addEventListener("click", e=>{
   const color = getRandomHexColor();

  backgroundColor.style.backgroundColor = color;
  spTxt.textContent = color;

});
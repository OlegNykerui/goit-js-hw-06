function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const colorText = document.querySelector(".color");

const changeColor = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  bodyColor.style.color = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
};

changeBtn.addEventListener("click", changeColor);

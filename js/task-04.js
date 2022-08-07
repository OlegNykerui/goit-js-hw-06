let counterDecrement = document.querySelector('[data-action="decrement"]');
let buttonValue = document.querySelector("#value");
let counterIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function handlerButtonClick(counter) {
  if (counter === "decrement") counterValue--;
  if (counter === "increment") counterValue++;
  return (buttonValue.textContent = counterValue);
}

counterDecrement.addEventListener("click", () =>
  handlerButtonClick("decrement")
);
counterIncrement.addEventListener("click", () =>
  handlerButtonClick("increment")
);

console.log(counterValue);

// let refs = {
//   inputName: document.getElementById("name-input"),
//   outputName: document.getElementById("name-output"),
// };

// refs.inputName.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.outputName.textContent = event.currentTarget.value;
// }

// let input = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// input.addEventListener("input", onInputChange);

// function onInputChange() {
//   input === ""
//     ? (nameOutput.innerHTML = "Anonymous")
//     : (nameOutput.innerHTML = input.value);
// }

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
  outputName.textContent = inputName.value;

  if (inputName.value.trim() === "") {
    outputName.textContent = "Anonymous";
  }
});

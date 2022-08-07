const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == inputText.dataset.length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else if (event.currentTarget.value.length == "") {
    inputText.classList.remove("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});

const sizeContol = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

sizeContol.addEventListener("change", (event) => {
  textChange.style.fontSize = `${event.target.value}px`;
});

// const inputLine = document.querySelector("#font-size-control");
// const textChange = document.querySelector("#text");

// inputLine.addEventListener("input", ({ currentTarget: { value } }) => {
//   textChange.style.fontSize = `${value}px`;
// });

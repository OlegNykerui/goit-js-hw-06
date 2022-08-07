const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   const formElement = event.currentTarget.elements;

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "")
    return alert("Будь ласка, заповніть обовязкові поля");

  console.log({
    email: email.value,
    password: password.value,
  });

  event.currentTarget.reset();
}

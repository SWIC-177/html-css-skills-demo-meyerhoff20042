import validator from "validator";
import { ERRORS, hideError, renderError } from "./src/utils";

console.log(ERRORS);

export function openIndex() {
  window.location.href = "index.html";
}

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];
console.log(formEls);

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    if (!elError.validate(e.target.value)) renderError(e.target, elError.msg);
    else hideError(e.target);
  });
});

export function submitForm() {
  // Get form elements
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Validate each input element
  if (!validateName(nameInput)) {
    alert("Please enter your full name.");
    console.log("name check");
    return false;
  }

  if (!validateEmail(emailInput)) {
    alert("Please enter a valid email address.");
    console.log("email check");
    return false;
  }

  if (!validateMessage(messageInput)) {
    alert("Please enter a message between 10 and 100 characters.");
    console.log("message check");
    return false;
  }

  return true;
}

function validateName(input) {
  return input.length > 6 && input.includes(" ");
}

function validateEmail(input) {
  return validator.isEmail(input);
}

function validateMessage(input) {
  return input.length >= 10 && input.length <= 100;
}

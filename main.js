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

import { ERRORS } from "./src/utils";

console.log(ERRORS);

function openIndex() {
  window.location.href = "index.html";
}

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];
console.log(formEls);

const submitBtn = document.querySelector("button[type='submit']");

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    console.log(
      ERRORS.find((error) => error.id === e.target.id).validate(e.target.value),
    );
  });
});

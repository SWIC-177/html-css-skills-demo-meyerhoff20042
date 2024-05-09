function openIndex() {
  window.location.href = "index.html";
}

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];
console.log(formEls);

const submitBtn = document.querySelector("button[type='submit']");

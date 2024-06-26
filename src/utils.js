export const ERRORS = [
  {
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters.",
    validate(val) {
      return val.length >= 10 && val.length <= 100;
    },
  },
];

export const hideError = (el) => {
  el.parentNode.querySelector(".error").classList.remove("is-error");
};

export const renderError = (el, msg) => {
  const elParent = el.nextElementSibling;

  // Did we already render an error?
  const errorEl = el.nextElementSibling;
  // If so, add the class to show the error message
  if (errorEl) errorEl.classList.add("is-error");
  // Otherwise, add the error message from scratch
  else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    elParent.appendChild(errorElement);
  }
};

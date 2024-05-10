export const ERRORS = [
  {
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  { id: "email", msg: "Please enter a valid email address." },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters.",
  },
];

export const hideError = (el) => {
  el.parentNode.querySelector(".error").classList.remove("is-error");
};

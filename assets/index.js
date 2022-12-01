const form = document.querySelector("form");
const validation = document.querySelector("button");
const error = document.querySelector("span.error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

validation.addEventListener("click", () => {
  if (error.style.transform == "scale(1)") {
    error.style.transform = "scale(0)";
  } else {
    error.style.transform = "scale(1)";
  }
});

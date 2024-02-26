const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const personName = event.currentTarget.value.trim();
    if ( personName.length > 0) {
    output.textContent = personName;
  } else {
    output.textContent = "Anonymous";
  }
});
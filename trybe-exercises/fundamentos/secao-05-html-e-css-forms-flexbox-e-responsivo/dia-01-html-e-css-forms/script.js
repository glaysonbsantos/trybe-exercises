const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

function handleSubmit(event) {
  event.preventDefault();
}

function handleClear() {
  alert("Ainda serei implementado!");
}

submitBtn.addEventListener("click", handleSubmit);
clearBtn.addEventListener("click", handleClear);

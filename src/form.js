function checkForm() {
  const inputs = Array.from(document.querySelectorAll("#form>input"));
  const submitBtn = form.querySelector(".submit");

  function attachEvents() {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", (e) => {
        localStorage.setItem(e.target.name, e.target.value);
      });
    }
  }

  function checkStorage() {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = localStorage.getItem(inputs[i].name);
    }
    attachEvents();
  }
  checkStorage();

  submitBtn.addEventListener("click", clearForm());
  function clearForm() {
    for (let item of inputs) {
      localStorage.removeItem(item.name);
    }
  }
}

export { checkForm };

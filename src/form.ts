function checkForm() {
  const inputs: HTMLInputElement[] = Array.from(
    document.querySelectorAll("#form>input")
  );
  const submitBtn = document.querySelector(".submit") as HTMLButtonElement;

  function attachEvents(): void {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", (e: Event) => {
        let target = e.target as HTMLInputElement;
        localStorage.setItem(target.name, target.value);
      });
    }
  }

  function checkStorage(): void {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = localStorage.getItem(inputs[i].name);
    }
    attachEvents();
  }
  checkStorage();

  function clearForm(): any {
    for (let item of inputs) {
      localStorage.removeItem(item.name);
    }
  }
  submitBtn.addEventListener("click", clearForm());
}

export { checkForm };

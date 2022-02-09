function handleSnack() {
  const snackAlert = document.querySelector(".warning-alert");
  const snackButton = document.querySelector(".warning-button");

  snackButton.addEventListener("click", () => {
    snackAlert.classList.remove("hide");
    snackAlert.classList.add("show");
    snackAlert.classList.add("showAlert");
    setTimeout(function () {
      snackAlert.classList.remove("show");
      snackAlert.classList.add("hide");
      snackAlert.classList.remove("showAlert");
    }, 5000);
  });
}

export {handleSnack}
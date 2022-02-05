const handleAlert = () => {
  const warningAlert = document.querySelectorAll(".warning-alert");
  const warningButton = document.querySelectorAll(".warning-button");
  const successButton = document.querySelectorAll(".success-button");
  const successAlert = document.querySelectorAll(".success-alert");
  const infoButton = document.querySelectorAll(".info-button");
  const infoAlert = document.querySelectorAll(".info-alert");
  const dangerButton = document.querySelectorAll(".danger-button");
  const dangerAlert = document.querySelectorAll(".danger-alert");

  for(let i =0 ; i < warningButton.length ; i++){
  warningButton[i].addEventListener("click", () => {
    warningAlert[i].classList.remove("hide");
    warningAlert[i].classList.add("show");
    warningAlert[i].classList.add("showAlert");
    setTimeout(function () {
      warningAlert[i].classList.remove("show");
      warningAlert[i].classList.add("hide");
      warningAlert[i].classList.remove("showAlert");
    }, 5000);
  });

  successButton[i].addEventListener("click", () => {
    successAlert[i].classList.remove("hide");
    successAlert[i].classList.add("show");
    successAlert[i].classList.add("showAlert");
    setTimeout(function () {
      successAlert[i].classList.remove("show");
      successAlert[i].classList.add("hide");
      successAlert[i].classList.remove("showAlert");
    }, 5000);
  });

  infoButton[i].addEventListener("click", () => {
    infoAlert[i].classList.remove("hide");
    infoAlert[i].classList.add("show");
    infoAlert[i].classList.add("showAlert");
    setTimeout(function () {
      infoAlert[i].classList.remove("show");
      infoAlert[i].classList.add("hide");
      infoAlert[i].classList.remove("showAlert");
    }, 5000);

  });

  dangerButton[i].addEventListener("click", () => {
    dangerAlert[i].classList.remove("hide");
    dangerAlert[i].classList.add("show");
    dangerAlert[i].classList.add("showAlert");
    setTimeout(function () {
      dangerAlert[i].classList.remove("show");
      dangerAlert[i].classList.add("hide");
      dangerAlert[i].classList.remove("showAlert");
    }, 5000);
  });

  const closeBtnWarning = document.querySelector(
    ".alert-container .warning-alert .fa-times-circle"
  );
  closeBtnWarning.addEventListener("click", () => {
    warningAlert[i].classList.remove("show");
    warningAlert[i].classList.add("hide");
    warningAlert[i].classList.remove("showAlert");
  });
  
  const closeBtnSuccess = document.querySelector(
    ".alert-container .success-alert .fa-times-circle"
  );
  closeBtnSuccess.addEventListener("click", () => {
    successAlert[i].classList.remove("show");
    successAlert[i].classList.add("hide");
    successAlert[i].classList.remove("showAlert");
  });
  
  const closeBtnInfo = document.querySelector(
    ".alert-container .info-alert .fa-times-circle"
  );
  closeBtnInfo.addEventListener("click", () => {
    infoAlert[i].classList.remove("show");
    infoAlert[i].classList.add("hide");
    infoAlert[i].classList.remove("showAlert");
  });
  
  const closeBtnDanger = document.querySelector(
    ".alert-container .danger-alert .fa-times-circle"
  );
  closeBtnDanger.addEventListener("click", () => {
    dangerAlert[i].classList.remove("show");
    dangerAlert[i].classList.add("hide");
    dangerAlert[i].classList.remove("showAlert");
  });
  
};

}

export { handleAlert };

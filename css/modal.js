const agreeButton = document.querySelector(".agree");
const modalContainer = document.querySelector(".rules-modal-container");

const modalHandler = () =>{
    modalContainer.style.display = "none";
}


agreeButton.addEventListener("click", modalHandler);
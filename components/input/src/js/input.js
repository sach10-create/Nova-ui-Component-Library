function handleInput() {
  const validation = document.querySelector(".pass");
  const msg = document.querySelector(".msg");
  const clickHandler = () => {
    if (validation.value.length > 10) {
      msg.style.color = "green";
      msg.innerText = "Password length is correct";
    }else{
        msg.style.color = "red";
        msg.innerText = "Password too short";
    }
  };

  validation.addEventListener("input", clickHandler);
}

export { handleInput };

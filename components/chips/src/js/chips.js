const handleChips = () => {
const basic_chip_cross = document.querySelectorAll(".basic-chip-cross");
basic_chip_cross.forEach((item) => {
  item.addEventListener(
    "click",
    () => (item.parentElement.style.display = "none")
  );
});
}

export {handleChips}
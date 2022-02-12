const handleDismiss = () => {
  const jersey = document.querySelector(".dismiss-jersey-container");
  const closeBtn = document.querySelector(
    ".jersey-container .wishlist-btn-container"
  );

  closeBtn.addEventListener("click", () => {
    jersey.style.display = "none";
  });
};

export {handleDismiss}
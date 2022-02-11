const handleCodeTab = (codeTabsBtnPath, codeTabsContentpath) => {
  const codeTabsBtn = document.querySelectorAll(codeTabsBtnPath);
  const codeTabContent = document.querySelectorAll(codeTabsContentpath);
  const clearAlltabs = () => {
    codeTabsBtn.forEach((item) => {
      if (item.classList.contains("code-tabs--btn-active")) {
        item.classList.remove("code-tabs--btn-active");
      }
    });
    codeTabContent.forEach((item) => {
      item.style.display = "none";
    });
  };
  const setActiveTab = (itemIndex) => {
    clearAlltabs();
    codeTabsBtn[itemIndex].classList.add("code-tabs--btn-active");
    codeTabContent[itemIndex].style.display = "block";
  };

  for (let i = 0; i < codeTabsBtn.length; i++) {
    codeTabsBtn[i].addEventListener("click", () => {
      setActiveTab(i);
    });
  }
  setActiveTab(0);
};

export { handleCodeTab };

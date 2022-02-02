// Code Tabs  Root FUnction JS
const handleCodeTab = (rdc_code_tabs_btn_path, rdc_code_tabs_content_path) => {
    const rdc_code_tabs_btn = document.querySelectorAll(rdc_code_tabs_btn_path);
    const rdc_code_tabs_content = document.querySelectorAll(
      rdc_code_tabs_content_path
    );
    const clearAlltabs = () => {
      rdc_code_tabs_btn.forEach((item) => {
        if (item.classList.contains("code-tabs--btn-active")) {
          item.classList.remove("code-tabs--btn-active");
        }
      });
      rdc_code_tabs_content.forEach((item) => {
        item.style.display = "none";
      });
    };
    const setActiveTab = (itemIndex) => {
      clearAlltabs();
      console.log(rdc_code_tabs_btn, rdc_code_tabs_btn_path)
      rdc_code_tabs_btn[itemIndex].classList.add("code-tabs--btn-active");
      rdc_code_tabs_content[itemIndex].style.display = "block";
    };
  
    for (let i = 0; i < rdc_code_tabs_btn.length; i++) {
      rdc_code_tabs_btn[i].addEventListener("click", () => {
        setActiveTab(i);
      });
    }
    // By default the first tab will be active
    setActiveTab(0);
  };
  
  export { handleCodeTab };
  
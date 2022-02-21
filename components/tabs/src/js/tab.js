const handleTabs = () => {
  let colors = ["#f44336", "#4caf50", "#2196f3", "#ff5722"];
  var tabButtons = document.querySelectorAll(".tab-button");
  var tabPanels = document.querySelectorAll(
    ".tab-container .panel-container .tab-panel"
  );

  function showPanel(panelIndex, colorCode) {
    console.log("I am here");
    tabButtons.forEach(function (node) {
      node.style.backgroundColor = "";
      node.style.color = "";
    });

    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";
    tabPanels.forEach(function (node) {
      node.style.display = "none";
    });

    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
  }

  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", () => showPanel(i, colors[i]));
  }
  
  showPanel(0, "#f44336");
};

export { handleTabs };

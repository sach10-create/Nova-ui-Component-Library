const elements = [
  {
    name: "Tabs",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .simple-tab .import-html",
    elementCodeFilePath: "./src/html/simple-tab.html",
    elementCodeLocation:
      ".simple-tab .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".simple-tab .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass: ".simple-tab .import-html .code-tabs--content",
    elementCodeClassPath: ".simple-tab .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522tab-container%2520d-flex%2520flex-column%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522button-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tab-button%2520cursor-pointer%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Tab%25201%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tab-button%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Tab%25202%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tab-button%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Tab%25203%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tab-button%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Tab%25204%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522panel-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522tab-panel%2522%253ETab%25201%253A%2520Content%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522tab-panel%2522%253ETab%25202%253A%2520Content%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522tab-panel%2522%253ETab%25203%253A%2520Content%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522tab-panel%2522%253ETab%25204%253A%2520Content%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
    style="width: 580px; height: 595px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".simple-tab .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520let%2520colors%2520%253D%2520%255B%2522%2523f44336%2522%252C%2520%2522%25234caf50%2522%252C%2520%2522%25232196f3%2522%252C%2520%2522%2523ff5722%2522%255D%253B%250A%2520%2520var%2520tabButtons%2520%253D%2520document.querySelectorAll%28%2522.tab-button%2522%29%253B%250A%2520%2520var%2520tabPanels%2520%253D%2520document.querySelectorAll%28%250A%2520%2520%2520%2520%2522.tab-container%2520.panel-container%2520.tab-panel%2522%250A%2520%2520%29%253B%250A%2520%2520function%2520showPanel%28panelIndex%252C%2520colorCode%29%2520%257B%250A%2520%2520%2520%2520console.log%28%2522I%2520am%2520here%2522%29%253B%250A%2520%2520%2520%2520tabButtons.forEach%28function%2520%28node%29%2520%257B%250A%2520%2520%2520%2520%2520%2520node.style.backgroundColor%2520%253D%2520%2522%2522%253B%250A%2520%2520%2520%2520%2520%2520node.style.color%2520%253D%2520%2522%2522%253B%250A%2520%2520%2520%2520%257D%29%253B%250A%2520%2520%2520%2520tabButtons%255BpanelIndex%255D.style.backgroundColor%2520%253D%2520colorCode%253B%250A%2520%2520%2520%2520tabButtons%255BpanelIndex%255D.style.color%2520%253D%2520%2522white%2522%253B%250A%2520%2520%2520%2520tabPanels.forEach%28function%2520%28node%29%2520%257B%250A%2520%2520%2520%2520%2520%2520node.style.display%2520%253D%2520%2522none%2522%253B%250A%2520%2520%2520%2520%257D%29%253B%250A%2520%2520%2520%2520tabPanels%255BpanelIndex%255D.style.display%2520%253D%2520%2522block%2522%253B%250A%2520%2520%2520%2520tabPanels%255BpanelIndex%255D.style.backgroundColor%2520%253D%2520colorCode%253B%250A%2520%2520%257D%250A%2520%2520for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520tabButtons.length%253B%2520i%252B%252B%29%2520%257B%250A%2520%2520%2520%2520tabButtons%255Bi%255D.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520showPanel%28i%252C%2520colors%255Bi%255D%29%29%253B%250A%2520%2520%257D"
    style="width: 782px; height: 595px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`
  },
];

export { elements };

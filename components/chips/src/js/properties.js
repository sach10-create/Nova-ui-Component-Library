const elements = [
  {
    name: "Basic Chips",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .basic-chips .import-html",
    elementCodeFilePath: "./src/html/basic-chips.html",
    elementCodeLocation:
      ".basic-chips .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".basic-chips .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".basic-chips .import-html .code-tabs--content",
    elementCodeClassPath:
      ".basic-chips .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522chip-container%2520d-flex%2520flex-wrap%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522basic-chip%2520d-flex%2520align-center%2520flex-wrap%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522basic-chip-content%2522%253EHTML%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522basic-chip-cross%2520cursor-pointer%2522%253Ex%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522basic-chip%2520d-flex%2520align-center%2520flex-wrap%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522basic-chip-content%2522%253ENodeJS%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522basic-chip-cross%2520cursor-pointer%2522%253Ex%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%257D"
    style="width: 622px; height: 375px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".basic-chips .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520basic_chip_cross%2520%253D%2520document.querySelectorAll%28%2522.basic-chip-cross%2522%29%253B%250Abasic_chip_cross.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2520%2520item.addEventListener%28%250A%2520%2520%2520%2520%2522click%2522%252C%250A%2520%2520%2520%2520%28%29%2520%253D%253E%2520%28item.parentElement.style.display%2520%253D%2520%2522none%2522%29%250A%2520%2520%29%253B%250A%257D%29%253B"
    style="width: 741px; height: 300px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  
];

export { elements };

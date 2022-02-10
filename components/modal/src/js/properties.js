/**
 * rootCodeLocation: Where we need to import code for code tabs.
 * elementCodeFilePath: The File Path for the component html file we need to import.
 * elementCodeLocation: The location where we need to import the code for the component.
 * handleCodeTabBtnClass: The classPath for the code tabs to call the handleCodeTab function which allows us to use the tabs.
 * handleCodeTabCodeContentClass: Here we add content classpath
 * elementCodeClassPath: This is the location where we store the HTML code.
 * elementCodeInnerText: Here we add HTML code
 * elementJSCodeClassPath: Here we add the classpath for JS code.
 * elementJSCodeInnerText: Here we add the JS code.
 * sandboxURLClass: Here we add the classPath for sandboxURL.
 * sandboxURL: Here we add  the sandbox URL
 */

const elements = [
  {
    name: "Popup Modal",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .popup-modal .import-html",
    elementCodeFilePath: "./src/html/popup-modal.html",
    elementCodeLocation:
      ".popup-modal .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".popup-modal .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".popup-modal .import-html .code-tabs--content",
    elementCodeClassPath:
      ".popup-modal .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522center%2522%253E%250A%2520%2520%2520%2520%253Cinput%2520type%253D%2522checkbox%2522%2520id%253D%2522click%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Clabel%2520for%253D%2522click%2522%2520class%253D%2522click-me%2522%253EClick%2520Me%253C%252Flabel%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522popup-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522header%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EPayment%2520Gateway%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522click%2522%2520class%253D%2522fas%2520fa-check%2522%253E%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Payment%2520Successful%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522line%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522click%2522%2520class%253D%2522close-btn%2522%253EClose%253C%252Flabel%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
    style="width: 623px; height: 468px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".popup-modal .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: ``,
  },
];

export { elements };
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
    name: "Simple Alert",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .simple-alert .import-html",
    elementCodeFilePath: "./src/html/simple-alert.html",
    elementCodeLocation:
      ".simple-alert .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".simple-alert .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".simple-alert .import-html .code-tabs--content",
    elementCodeClassPath:
      ".simple-alert .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522warning-button%2522%253E%250A%2520%2520%2520%2520Show%2520Warning%250A%253C%252Fbutton%253E%250A%253Carticle%2520class%253D%2522warning-alert%2520hide%2522%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-exclamation-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522warning-msg%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520Warning%2520Message%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%253C%252Farticle%253E"
    style="width: 530px; height: 354px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".simple-alert .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520warningAlert%2520%253D%2520document.querySelectorAll%28%2522.warning-alert%2522%29%253B%250Aconst%2520warningButton%2520%253D%2520document.querySelectorAll%28%2522.warning-button%2522%29%253B%250A%250Afor%28let%2520i%2520%253D0%2520%253B%2520i%2520%253C%2520warningButton.length%2520%253B%2520i%252B%252B%29%257B%250A%2520%2520warningButton%255Bi%255D.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522hide%2522%29%253B%250A%2520%2520warningAlert%255Bi%255D.classList.add%28%2522show%2522%29%253B%250A%2520%2520warningAlert%255Bi%255D.classList.add%28%2522showAlert%2522%29%253B%250A%2520%2520%2520setTimeout%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522show%2522%29%253B%250A%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.add%28%2522hide%2522%29%253B%250A%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522showAlert%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%257D%252C3000%29%253B%250A%2520%2520%257D%29%253B%250A"
    style="width: 715px; height: 465px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    name: "Dismiss Alert",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .dismiss-alert .import-html",
    elementCodeFilePath: "./src/html/dismiss-alert.html",
    elementCodeLocation:
      ".dismiss-alert .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".dismiss-alert .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".dismiss-alert .import-html .code-tabs--content",
    elementCodeClassPath:
      ".dismiss-alert .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520warningAlert%2520%253D%2520document.querySelectorAll%28%2522.warning-alert%2522%29%253B%250Aconst%2520warningButton%2520%253D%2520document.querySelectorAll%28%2522.warning-button%2522%29%253B%250A%250Afor%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520warningButton.length%253B%2520i%252B%252B%29%2520%257B%250A%2520%2520%2520%2520warningButton%255Bi%255D.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522hide%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.add%28%2522show%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.add%28%2522showAlert%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520setTimeout%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522show%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.add%28%2522hide%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522showAlert%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%25203000%29%253B%250A%2520%2520%2520%2520%257D%29%253B%250A%257D%250A"
    style="width: 715px; height: 484px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".dismiss-alert .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520warningAlert%2520%253D%2520document.querySelectorAll%28%2522.warning-alert%2522%29%253B%250Aconst%2520warningButton%2520%253D%2520document.querySelectorAll%28%2522.warning-button%2522%29%253B%250A%250Afor%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520warningButton.length%253B%2520i%252B%252B%29%2520%257B%250A%2520%2520%2520%2520warningButton%255Bi%255D.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522hide%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.add%28%2522show%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.add%28%2522showAlert%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520setTimeout%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522show%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.add%28%2522hide%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522showAlert%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%25205000%29%253B%250A%2520%2520%2520%2520%257D%29%253B%250A%250A%2520%2520%2520%2520const%2520closeBtnWarning%2520%253D%2520document.querySelector%28%2522.alert-container%2520.warning-alert%2520.fa-times-circle%2522%29%253B%250A%2520%2520%2520%2520closeBtnWarning.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522show%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.add%28%2522hide%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520warningAlert%255Bi%255D.classList.remove%28%2522showAlert%2522%29%253B%250A%2520%2520%2520%2520%257D%29%253B%250A%257D"
    style="width: 1018px; height: 595px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  }
];

export { elements };

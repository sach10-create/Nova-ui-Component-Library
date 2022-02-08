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
    name: "Snackbar",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .snackbar .import-html",
    elementCodeFilePath: "./src/html/snack.html",
    elementCodeLocation:
      ".snackbar .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".snackbar .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass: ".snackbar .import-html .code-tabs--content",
    elementCodeClassPath: ".snackbar .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Csection%2520class%253D%2522alert-container%2520snack-container%2522%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522warning-button%2520snack-button%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Show%2520Snackbar%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522warning-alert%2520snack-alert%2520hide%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-exclamation-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522warning-msg%2520snack-msg%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Failed%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%253C%252Fsection%253E"
    style="width: 573px; height: 375px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".snackbar .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520handleSnack%28%29%2520%257B%250A%2520%2520const%2520snackAlert%2520%253D%2520document.querySelector%28%2522.warning-alert%2522%29%253B%250A%2520%2520const%2520snackButton%2520%253D%2520document.querySelector%28%2522.warning-button%2522%29%253B%250A%250A%2520%2520snackButton.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520snackAlert.classList.remove%28%2522hide%2522%29%253B%250A%2520%2520%2520%2520snackAlert.classList.add%28%2522show%2522%29%253B%250A%2520%2520%2520%2520snackAlert.classList.add%28%2522showAlert%2522%29%253B%250A%2520%2520%2520%2520setTimeout%28function%2520%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520snackAlert.classList.remove%28%2522show%2522%29%253B%250A%2520%2520%2520%2520%2520%2520snackAlert.classList.add%28%2522hide%2522%29%253B%250A%2520%2520%2520%2520%2520%2520snackAlert.classList.remove%28%2522showAlert%2522%29%253B%250A%2520%2520%2520%2520%257D%252C%25205000%29%253B%250A%2520%2520%257D%29%253B%250A%257D%250A%250Aexport%2520%257BhandleSnack%257D"
    style="width: 674px; height: 486px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
];

export { elements };

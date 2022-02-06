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
    name: "Star Rating",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .star-rating .import-html",
    elementCodeFilePath: "./src/html/star-rating.html",
    elementCodeLocation:
      ".star-rating .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".star-rating .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".star-rating .import-html .code-tabs--content",
    elementCodeClassPath:
      ".star-rating .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522star-rating%2522%253E%250A%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star%2520%2522%253E%253C%252Fi%253E%250A%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star%2520%2522%253E%253C%252Fi%253E%250A%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star%2520%2522%253E%253C%252Fi%253E%250A%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star%2520unset%2522%253E%253C%252Fi%253E%250A%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star%2520unset%2522%253E%253C%252Fi%253E%250A%253C%252Fdiv%253E%250A"
    style="width: 420px; height: 318px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".star-rating .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
];

export { elements };

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
    name: "Responsive Image",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .resp-image .import-html",
    elementCodeFilePath: "./src/html/resp-image.html",
    elementCodeLocation:
      ".resp-image .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".resp-image .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".resp-image .import-html .code-tabs--content",
    elementCodeClassPath:
      ".resp-image .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522image-container%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Fimage.jpg%2522%2520alt%253D%2522Galaxy%2520Image%2522%2520class%253D%2522reponsive-image%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
    style="width: 825px; height: 242px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".resp-image .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
  {
    name: "Round Image",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .round-image .import-html",
    elementCodeFilePath: "./src/html/round-image.html",
    elementCodeLocation:
      ".round-image .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".round-image .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".round-image .import-html .code-tabs--content",
    elementCodeClassPath:
      ".round-image .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520class%253D%2522img-round%2522%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%253E"
    style="width: 571px; height: 205px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".round-image .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
];

export { elements };

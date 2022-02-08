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
    name: "Text Input",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .text-input .import-html",
    elementCodeFilePath: "./src/html/text-input.html",
    elementCodeLocation:
      ".text-input .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".text-input .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".text-input .import-html .code-tabs--content",
    elementCodeClassPath:
      ".text-input .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522login-container%2522%253E%250A%2520%2520%2520%2520%253Cform%2520class%253D%2522box%2522%2520action%253D%2522%2522%2520method%253D%2522post%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520class%253D%2522name%2522%2520type%253D%2522text%2522%2520name%253D%2522%2522%2520placeholder%253D%2522Username%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520class%253D%2522pass%2522%2520type%253D%2522password%2522%2520name%253D%2522%2522%2520placeholder%253D%2522Password%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fform%253E%250A%253C%252Fdiv%253E"
    style="width: 782px; height: 281px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".text-input .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
  {
    name: "Text Icon",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .text-icon .import-html",
    elementCodeFilePath: "./src/html/text-icon.html",
    elementCodeLocation:
      ".text-icon .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".text-icon .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".text-icon .import-html .code-tabs--content",
    elementCodeClassPath: ".text-icon .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cform%2520class%253D%2522search%2522%2520action%253D%2522%2522%2520method%253D%2522post%2522%253E%250A%2520%2520%2520%2520%253Cinput%2520class%253D%2522search-input%2522%2520type%253D%2522text%2522%2520name%253D%2522%2522%2520placeholder%253D%2522Search..%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-search%2520search-icon%2522%253E%253C%252Fi%253E%250A%253C%252Fform%253E"
    style="width: 782px; height: 243px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".text-icon .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
  {
    name: "Filter Rating",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .filter-rating .import-html",
    elementCodeFilePath: "./src/html/filter-rating.html",
    elementCodeLocation:
      ".filter-rating .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".filter-rating .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".filter-rating .import-html .code-tabs--content",
    elementCodeClassPath:
      ".filter-rating .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522radio-btn-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520form-heading%2522%253ESort%2520by%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522radio%2522%2520id%253D%2522radio-btn%2522%2520name%253D%2522radio-btn%2522%2520value%253D%2522Price%2520Low%2520to%2520High%2522%2520%252F%253E%2520Price%253A%2520Low%2520to%2520High%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522radio%2522%2520id%253D%2522radio-btn%2522%2520name%253D%2522radio-btn%2522%2520value%253D%2522Price%2520Low%2520to%2520High%2522%2520%252F%253E%2520Price%253A%2520High%2520to%2520Low%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520type%253D%2522radio%2522%2520name%253D%2522radio-btn%2522%2520id%253D%2522radio-btn%2522%2520value%253D%2522Customer%2520Rating%2522%2520%252F%253E%2520Customer%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Rating%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520type%253D%2522radio%2522%2520name%253D%2522radio-btn%2522%2520id%253D%2522radio-btn%2522%2520value%253D%2522Better%2520Discount%2522%2520%252F%253E%2520Better%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Discount%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522checkbox-btn-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520form-heading%2522%253ECategories%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520type%253D%2522checkbox%2522%2520value%253D%2522Casual%2520Shoes%2522%2520%252F%253E%2520Casual%2520Shoes%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520type%253D%2522checkbox%2522%2520value%253D%2522Sports%2520Shoes%2522%2520%252F%253E%2520Sports%2520Shoes%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520type%253D%2522checkbox%2522%2520value%253D%2522Formal%2520Shoes%2522%2520%252F%253E%2520Formal%2520Shoes%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520type%253D%2522checkbox%2522%2520value%253D%2522Sneakers%2522%2520%252F%253E%2520Sneakers%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522checkbox%2522%2520value%253D%2522Sandles%2520%2526%2520Floaters%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Sandles%2520%2526%2520Floaters%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520type%253D%2522checkbox%2522%2520value%253D%2522Socks%2522%2520%252F%253E%2520Socks%253C%252Fli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%253C%252Ful%253E"
    style="width: 1024px; height: 765px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".filter-rating .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
];

export { elements };

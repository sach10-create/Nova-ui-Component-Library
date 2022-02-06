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
    name: "Vertical Card",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .vertical-card .import-html",
    elementCodeFilePath: "./src/html/vertical-card.html",
    elementCodeLocation:
      ".vertical-card .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".vertical-card .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".vertical-card .import-html .code-tabs--content",
    elementCodeClassPath:
      ".vertical-card .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522button-container%2522%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2522%253EOutline%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520primary-card-btn%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522primary-cart-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522primary-cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-cart-icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
    style="width: 816px; height: 428px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".vertical-card .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
  {
    name: "Badge Card 1",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .badge-card-1 .import-html",
    elementCodeFilePath: "./src/html/badge-card-1.html",
    elementCodeLocation:
      ".badge-card-1 .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".badge-card-1 .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".badge-card-1 .import-html .code-tabs--content",
    elementCodeClassPath:
      ".badge-card-1 .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522button-container%2522%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2522%253EOutline%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520primary-card-btn%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522primary-cart-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522primary-cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-cart-icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
    style="width: 816px; height: 428px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".badge-card-1 .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
  {
    name: "Badge Card 2",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .badge-card-2 .import-html",
    elementCodeFilePath: "./src/html/badge-card-2.html",
    elementCodeLocation:
      ".badge-card-2 .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".badge-card-2 .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".badge-card-2 .import-html .code-tabs--content",
    elementCodeClassPath:
      ".badge-card-2 .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522button-container%2522%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2522%253EOutline%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520primary-card-btn%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522primary-cart-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522primary-cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary-cart-icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
    style="width: 816px; height: 428px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".badge-card-2 .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
  {
    name: "Horizontal Card",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .horizontal-card .import-html",
    elementCodeFilePath: "./src/html/horizontal-card.html",
    elementCodeLocation:
      ".horizontal-card .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".horizontal-card .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".horizontal-card .import-html .code-tabs--content",
    elementCodeClassPath:
      ".horizontal-card .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522horizontal-card-container%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-image-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-card-img%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Fjersey.png%2522%2520alt%253D%2522jersey%2522%2520class%253D%2522horizontal-card-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-text-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522horizontal-card-heading%2522%253EBarcelona%2520Home%2520Kit%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%2522horizontal-card-category%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Jersey%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522rating%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520set%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520set%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520set%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520set%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520unset%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522secondary-font%2522%253E%2526nbsp%2520%257C%2520%28400%2520reviews%29%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522pricing%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ERs.%25202999%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522secondary-font%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cstrike%253ERs.%25205999%253C%252Fstrike%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522discount%2522%253E%28%2520Rs.%25203000%2520OFF%2520%29%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522select-size%2522%253ESelect%2520Size%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522sizes-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522size%2522%253EXS%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522size%2522%253ES%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522size%2522%253EM%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522size%2522%253EL%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522size%2522%253EXL%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522size%2522%253EXXL%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-button-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522card-btn%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522cart-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522wishlist-btn%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522wishlist-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522wishlist-text%2522%253EAdd%2520to%2520Wishlist%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-details-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EProduct%2520Details%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522specification-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cform%2520class%253D%2522specifi"
    style="width: 1024px; height: 1861px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".horizontal-card .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
];

export { elements };

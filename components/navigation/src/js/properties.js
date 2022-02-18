const elements = [
  {
    name: "Navigation",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .simple-navigation .import-html",
    elementCodeFilePath: "./src/html/simple-navigation.html",
    elementCodeLocation:
      ".simple-navigation .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".simple-navigation .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".simple-navigation .import-html .code-tabs--content",
    elementCodeClassPath:
      ".simple-navigation .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cnav%2520class%253D%2522nav-container%2522%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522list-components%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522component%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fui-nova.netlify.app%252Fcomponents%252Falerts%252Falerts.html%2522%2520class%253D%2522navbar-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Alert%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522component%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fui-nova.netlify.app%252Fcomponents%252Favatar%252Favatar.html%2522%2520class%253D%2522navbar-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Avatar%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522component%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fui-nova.netlify.app%252Fcomponents%252Fbadge%252Fbadge.html%2522%2520class%253D%2522navbar-link%2520link-active%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Badge%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522component%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fui-nova.netlify.app%252Fcomponents%252Fbutton%252Fbutton.html%2522%2520class%253D%2522navbar-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Button%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522component%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fui-nova.netlify.app%252Fcomponents%252Fcard%252Fcard.html%2522%2520class%253D%2522navbar-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Card%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%253C%252Fnav%253E"
    style="width: 1024px; height: 728px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".simple-navigation .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: "NA",
  },
];

export { elements };

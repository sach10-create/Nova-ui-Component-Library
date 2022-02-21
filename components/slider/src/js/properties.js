const elements = [
  {
    name: "Price Slider",
    rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
    rootCodeLocation: "main .main--sub-heading .price-slider .import-html",
    elementCodeFilePath: "./src/html/price-slider.html",
    elementCodeLocation:
      ".price-slider .import-html .code-tabs--content-container .preview",
    handleCodeTabBtnClass:
      ".price-slider .import-html .code-tabs-btn--container .code-tab--btn",
    handleCodeTabCodeContentClass:
      ".price-slider .import-html .code-tabs--content",
    elementCodeClassPath:
      ".price-slider .import-html .code-tabs--container .code",
    elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522wrapper%2522%253E%250A%2520%2520%2520%2520%253Cheader%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%2522h2-tag%2522%253EPrice%2520Range%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522h3-tag%2522%253EUse%2520slider%2520or%2520enter%2520min%2520and%2520max%2520price%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fheader%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522price-input%2520d-flex%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522field%2520d-flex%2520align-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253EMin%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522number%2522%2520class%253D%2522input-min%2522%2520value%253D%25222500%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522separator%2520d-flex%2520align-center%2520justify-content-center%2522%253E-%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522field%2520d-flex%2520align-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253EMax%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522number%2522%2520class%253D%2522input-max%2522%2520value%253D%25227500%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522price-slider%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522progress%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522range-input%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522range%2522%2520class%253D%2522range-min%2522%2520min%253D%25220%2522%2520max%253D%252210000%2522%2520value%253D%25222500%2522%2520step%253D%2522100%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522range%2522%2520class%253D%2522range-max%2522%2520min%253D%25220%2522%2520max%253D%252210000%2522%2520value%253D%25227500%2522%2520step%253D%2522100%2522%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
    style="width: 893px; height: 617px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
    elementJSCodeClassPath:
      ".price-slider .import-html .code-tabs--container .code-js",
    elementJSCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520priceInput.forEach%28%28input%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520input.addEventListener%28%2522input%2522%252C%2520%28e%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520let%2520minPrice%2520%253D%2520parseInt%28priceInput%255B0%255D.value%29%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520maxPrice%2520%253D%2520parseInt%28priceInput%255B1%255D.value%29%253B%250A%250A%2520%2520%2520%2520%2520%2520if%2520%28maxPrice%2520-%2520minPrice%2520%253E%253D%2520priceGap%2520%2526%2526%2520maxPrice%2520%253C%253D%2520rangeInput%255B1%255D.max%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28e.target.className%2520%253D%253D%253D%2520%2522input-min%2522%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520rangeInput%255B0%255D.value%2520%253D%2520minPrice%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520range.style.left%2520%253D%2520%28minPrice%2520%252F%2520rangeInput%255B0%255D.max%29%2520*%2520100%2520%252B%2520%2522%2525%2522%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%2520else%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520rangeInput%255B1%255D.value%2520%253D%2520maxPrice%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520range.style.right%2520%253D%2520100%2520-%2520%28maxPrice%2520%252F%2520rangeInput%255B1%255D.max%29%2520*%2520100%2520%252B%2520%2522%2525%2522%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%257D"
    style="width: 800px; height: 431px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
];

export { elements };

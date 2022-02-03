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

const elements = [{
		name: "Badge Avatar",
		rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
		rootCodeLocation: "main .main--sub-heading .badge-avatar .import-html",
		elementCodeFilePath: "./src/html/badge-avatar.html",
		elementCodeLocation: ".badge-avatar .import-html .code-tabs--content-container .preview",
		handleCodeTabBtnClass: ".badge-avatar .import-html .code-tabs-btn--container .code-tab--btn",
		handleCodeTabCodeContentClass: ".badge-avatar .import-html .code-tabs--content",
		elementCodeClassPath: ".badge-avatar .import-html .code-tabs--container .code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Csection%2520class%253D%2522avatar-badge-container%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522avatar-badge-divison%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%2520alt%253D%2522avatar1%2522%2520class%253D%2522avatar%2520xlg-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge-status%2520xlg-badge%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522avatar-badge-divison%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%2520alt%253D%2522avatar1%2522%2520class%253D%2522avatar%2520lg-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge-status%2520lg-badge%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522avatar-badge-divison%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%2520alt%253D%2522avatar1%2522%2520class%253D%2522avatar%2520md-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge-status%2520md-badge%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522avatar-badge-divison%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%2520alt%253D%2522avatar1%2522%2520class%253D%2522avatar%2520sm-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge-status%2520sm-badge%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fsection%253E"
		style="width: 850px; height: 670px; border:0; transform: scale(1); overflow:hidden;"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath: ".badge-avatar .import-html .code-tabs--container .code-js",
		elementJSCodeInnerText: "NA",
	},
	{
		name: "Badge Icon",
		rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
		rootCodeLocation: "main .main--sub-heading .badge-icon .import-html",
		elementCodeFilePath: "./src/html/badge-icon.html",
		elementCodeLocation: ".badge-icon .import-html .code-tabs--content-container .preview",
		handleCodeTabBtnClass: ".badge-icon .import-html .code-tabs-btn--container .code-tab--btn",
		handleCodeTabCodeContentClass: ".badge-icon .import-html .code-tabs--content",
		elementCodeClassPath: ".badge-icon .import-html .code-tabs--container .code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522icon-badge-container%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522icon-badge%2522%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-user%2520header-img%2522%253E%253C%252Fi%253E%250A%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522icon-badge-text%2522%253E24%253C%252Fp%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522icon-badge%2522%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-heart%2520header-img%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522icon-badge-text%2522%253E12%253C%252Fp%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522icon-badge%2522%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2520header-img%2522%253E%253C%252Fi%253E%250A%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522icon-badge-text%2522%253E12%253C%252Fp%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
		style="width: 580px; height: 484px; border:0; transform: scale(1); overflow:hidden;"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath: ".badge-icon .import-html .code-tabs--container .code-js",
		elementJSCodeInnerText: "NA",
	}

];

export {
	elements
};
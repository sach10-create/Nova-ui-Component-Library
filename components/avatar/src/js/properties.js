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
		name: "Simple Avatar",
		rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
		rootCodeLocation:
			"main .main--sub-heading .simple-avatar .import-html",
		elementCodeFilePath: "./src/html/simple-avatar.html",
		elementCodeLocation:
			".simple-avatar .import-html .code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".simple-avatar .import-html .code-tabs-btn--container .code-tab--btn",
		handleCodeTabCodeContentClass:
			".simple-avatar .import-html .code-tabs--content",
		elementCodeClassPath:
			".simple-avatar .import-html .code-tabs--container .code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Csection%2520class%253D%2522simple-avatar-container%2522%253E%250A%2520%2520%2520%2520%253Ch1%2520class%253D%2522avatar-prop%2520avatar-size-lg%2520avatar-text%2522%253ESP%253C%252Fh1%253E%250A%2520%2520%2520%2520%253Ch2%2520class%253D%2522avatar-prop%2520avatar-size-md%2520avatar-text%2522%253ESP%253C%252Fh2%253E%250A%2520%2520%2520%2520%253Ch3%2520class%253D%2522avatar-prop%2520avatar-size-sm%2520avatar-text%2522%253ESP%253C%252Fh3%253E%250A%253C%252Fsection%253E"
		style="width: 673px; height: 279px; border:0; transform: scale(1); overflow:hidden;"
		sandbox="allow-scripts allow-same-origin" class= "code-iframe">
	  </iframe>`,
		elementJSCodeClassPath:
			".simple-avatar .import-html .code-tabs--container .code-js",
		elementJSCodeInnerText: "NA",
	},
	
	{
		name: "Profile Avatar",
		rootCodeTabFilePath: "../../../../main/src/html/code-tabs-root.html",
		rootCodeLocation:
			"main .main--sub-heading .profile-avatar .import-html",
		elementCodeFilePath: "./src/html/profile-avatar.html",
		elementCodeLocation:
			".profile-avatar .import-html .code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".profile-avatar .import-html .code-tabs-btn--container .code-tab--btn",
		handleCodeTabCodeContentClass:
			".profile-avatar .import-html .code-tabs--content",
		elementCodeClassPath:
			".profile-avatar .import-html .code-tabs--container .code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Csection%2520class%253D%2522profile-avatar-container%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522profile-avatar%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522avatar%2520xl-img%2522%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522profile-avatar%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522avatar%2520l-img%2522%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522profile-avatar%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522avatar%2520m-img%2522%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522profile-avatar%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fassets%252Favatar.jpg%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522avatar%2520s-img%2522%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fsection%253E"
		style="width: 766px; height: 447px; border:0; transform: scale(1); overflow:hidden;"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".profile-avatar .import-html .code-tabs--container .code-js",
		elementJSCodeInnerText: "NA",
	}
];

export { elements };

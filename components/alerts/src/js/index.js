// // Index JS
import { codeImport } from "../../../../main/src/js/import-html.js";
import { elements } from "./properties.js";
import {handleAlert} from "./simple-alert.js";
// import { handleDismissAlert } from "./dismiss-alert.js";

// Call Function
const callImportFunctions = async () => {
  for (let i = 0; i < elements.length; i++) {
    await codeImport(elements[i]);
  }
};

// runs all the js files
const runScripts = async () => {
  const importCode = await callImportFunctions();
  handleAlert();
  // handleDismissAlert();
};
runScripts();

// // Index JS
import { codeImport } from "../../../../main/src/js/import-html.js";
import { elements } from "./properties.js";
import { handleSnack } from "./snackbar.js";

// Call Function
const callImportFunctions = async () => {
  for (let i = 0; i < elements.length; i++) {
    await codeImport(elements[i]);
  }
};

// runs all the js files
const runScripts = async () => {
  const importCode = await callImportFunctions();
  handleSnack();
};
runScripts();

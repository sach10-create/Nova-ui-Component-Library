import { codeImport } from "../../../../main/src/js/import-html.js";
import { elements } from "./properties.js";
import { handleSlider } from "./slider.js";

const callImportFunctions = async () => {
  for (let i = 0; i < elements.length; i++) {
    await codeImport(elements[i]);
  }
};

const runScripts = async () => {
  const importCode = await callImportFunctions();
  handleSlider();
};
runScripts();

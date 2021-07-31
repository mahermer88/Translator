import { dealWithFile } from "./deal_with_file.js";
import { dealWithTranslated } from "./deal_with_translated.js";

document.addEventListener(`DOMContentLoaded`, dealWithFile());

const creator = document.getElementById("creator");
creator.addEventListener("click", dealWithTranslated);

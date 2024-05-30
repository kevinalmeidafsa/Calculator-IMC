import { Modal } from "./components/modal.js";
import { AlertError } from "./components/alertError.js";
import { calculateIMC, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (e) => {
  e.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);
  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }
  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

inputWeight.oninput = () => {
  AlertError.close();
};
inputHeight.oninput = () => {
  AlertError.close();
};

function displayResultMessage(result) {
  const message = `Seu IMC é ${result}`;

  Modal.open();
  Modal.message.innerHTML = message;

  inputWeight.value = "";
  inputHeight.value = "";
}

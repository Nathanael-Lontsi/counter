import "./style/style.css";

import { addition, minus, getCurrentValue } from "./data.js"

const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");
const textContainer = document.querySelector("span");

function displayValue(text = getCurrentValue()) {
  textContainer.innerHTML = text;
}

plusBtn.addEventListener("click", () => {
  addition();
  displayValue();
})

minusBtn.addEventListener("click", () => {
  minus();
  displayValue();
})

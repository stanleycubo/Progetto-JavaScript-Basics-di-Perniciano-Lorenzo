const buttonLeft = document.createElement("button");
buttonLeft.textContent = " - ";
buttonLeft.id = "buttonLeft";
document.getElementById("container").append(buttonLeft);

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv";
document.getElementById("container").append(containerDiv);

const counter = document.createElement("h2");
counter.id = "counter";
document.getElementById("containerDiv").append(counter);

const resetButton = document.createElement("h2");
resetButton.textContent = " RESET ";
resetButton.setAttribute("role", "button");
resetButton.id = "resetButton";
document.getElementById("containerDiv").append(resetButton);

const buttonRight = document.createElement("button");
buttonRight.textContent = " + ";
buttonRight.id = "buttonRight";
document.getElementById("container").append(buttonRight);

//! non so se può funzionare

let count = 0;
counter.textContent = count;

buttonRight.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

buttonLeft.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

const buttonLeft = document.createElement("button");
const containerDiv = document.createElement("div");
const counter = document.createElement("h2");
const resetButton = document.createElement("h2");
const buttonRight = document.createElement("button");

buttonLeft.textContent = " - ";
buttonLeft.id = "buttonLeft";

containerDiv.id = "containerDiv";

counter.id = "counter";

resetButton.textContent = " RESET ";
resetButton.setAttribute("role", "button");
resetButton.id = "resetButton";

buttonRight.textContent = " + ";
buttonRight.id = "buttonRight";

document.getElementById("container").append(buttonLeft);
document.getElementById("container").append(containerDiv);
document.getElementById("containerDiv").append(counter);
document.getElementById("containerDiv").append(resetButton);
document.getElementById("container").append(buttonRight);

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

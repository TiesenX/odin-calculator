const calculator = document.querySelector(".calculator");
let buttons = document.getElementsByTagName("button");
const screen = document.querySelector(".screen");
const body = document.querySelector("body");

let DISP = "0"
let LEFT;
let operand;
let RIGHT;

function operate(){

}

function updateScreen(){
  screen.textContent = DISP;
}

function clearEffect(){
  for (let i = 0; i<buttons.length; i++){
    if (buttons[i].classList.contains("toggle-click")) buttons[i].classList.remove("toggle-click");
  } 
}

// clear effect when click in the body
body.addEventListener("click", () => {
  clearEffect();
}, true);

function addButtonsEvent(buttons) {
  for (let i = 0; i<buttons.length; i++){
    console.log(`${buttons[i].textContent} \n`);
    if (buttons[i].classList.contains("operand") && buttons[i].textContent !== "="){
      buttons[i].addEventListener("click", (e) => {
        clearEffect();
        buttons[i].classList.toggle("toggle-click");
        operand = buttons[i].textContent;
      });
    }
    else {
      buttons[i].addEventListener("mousedown", () => {
        buttons[i].classList.toggle("toggle-click");

      });
      buttons[i].addEventListener("mouseup", () => {
        buttons[i].classList.toggle("toggle-click"); 
        document.releaseCap
      });
    }

  }
}



updateScreen();
addButtonsEvent(buttons);
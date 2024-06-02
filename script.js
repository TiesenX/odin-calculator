const calculator = document.querySelector(".calculator");
let buttons = document.getElementsByTagName("button");
const screen = document.querySelector(".screen");
const body = document.querySelector("body");

let LEFT = "0";
let operand = "";
let RIGHT = "";


function operate(left, right, op){
  str = `${left}${op}${right}`
  return Function(`'use strict'; return (${str})`)()
  
}

function updateScreen(value){
  screen.textContent = value;
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
        // operand = buttons[i].textContent;
        if (RIGHT === "") {
          operand = buttons[i].textContent;
          console.log(`here ${LEFT}${operand}${RIGHT}`);
        }
        else {
          LEFT = `${operate(LEFT, RIGHT, operand)}`;
          operand = buttons[i].textContent;
          RIGHT = "";
          updateScreen(LEFT);
          console.log(`here1 ${LEFT}${operand}${RIGHT}`);
        }
      });
    }
    else {
      buttons[i].addEventListener("mousedown", () => {
        buttons[i].classList.toggle("toggle-click");

      });
      buttons[i].addEventListener("mouseup", () => {
        buttons[i].classList.toggle("toggle-click"); 
        if (buttons[i].classList.contains("number") || buttons[i].classList.contains("zero")){
          if (operand !== "") {
            RIGHT += buttons[i].textContent;
            updateScreen(RIGHT);
            console.log(`${LEFT}${operand}${RIGHT}`);
          } else {
            if (LEFT === "0") LEFT = buttons[i].textContent;
            else LEFT += buttons[i].textContent;

            updateScreen(LEFT);
            console.log(`${LEFT}${operand}${RIGHT}`);
          }
        }
        else if (buttons[i].textContent === "=") {
          if (operand !== ""){
            if (RIGHT === "") LEFT = operate(LEFT, LEFT, operand);
          
            else LEFT = operate(LEFT, RIGHT, operand);
            console.log(`${LEFT}${operand}${RIGHT}`);
            operand = "";
            RIGHT = "";
            updateScreen(LEFT);
          }
        }

        else {
          if (buttons[i].textContent === "AC") {
            LEFT = "0";
            operand = "";
            RIGHT = "";
            updateScreen(LEFT);
          }
        }
      });
    }

  }
}



updateScreen(LEFT);
addButtonsEvent(buttons);
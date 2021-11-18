let displayText = "";
let memoryNew = "0";
let memoryOld = "0";
let operator = "";
let freshNumber = true;

let displayElement = document.getElementById("display");

function btnPress(e){
    if(freshNumber){
        displayText = "";
        displayElement.innerHTML="";
        freshNumber=false;
    }
    displayText += e.innerHTML;
    displayElement.innerHTML=displayText;
    // console.log(e.innerHTML);
    // console.log(displayText)
}

function btnReset(){
    displayText = "";
    displayElement.innerHTML="";
    operator = "";
    memoryNew="0"
    memoryOld="0";
}

function btnDelete(){
    displayText = displayText.slice(0, -1);
    displayElement.innerHTML=displayText;
}

function btnOperator(e){
    if (operator === "") noOp();
    if (operator === "+") add();
    if (operator === "-") subtract();
    if (operator === "*") multiply();
    if (operator === "/") divide();    
    
    operator = e.innerHTML;
}

function noOp(){
    memoryNew = displayText;
    // displayText = "";
    // displayElement.innerHTML=displayText;
    memoryOld = displayText;
    freshNumber = true; 
}

function add(){
    memoryNew = displayText;
    displayText = (parseFloat(memoryNew)+parseFloat(memoryOld)).toString();
    displayElement.innerHTML=displayText;
    memoryOld = displayText;
    freshNumber = true;  
}

function subtract(){
    memoryNew = displayText;
    displayText = (parseFloat(memoryOld)-parseFloat(memoryNew)).toString();
    displayElement.innerHTML=displayText;
    memoryOld = displayText;
    freshNumber = true; 
}

function divide(){
    memoryNew = displayText;
    displayText = (parseFloat(memoryOld)/parseFloat(memoryNew)).toString();
    displayElement.innerHTML=displayText;
    memoryOld = displayText;
    freshNumber = true; 
}

function multiply(){
    memoryNew = displayText;
    displayText = (parseFloat(memoryOld)*parseFloat(memoryNew)).toString();
    displayElement.innerHTML=displayText;
    memoryOld = displayText;
    freshNumber = true; 
}


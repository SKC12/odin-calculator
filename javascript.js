let displayText = "";
let memoryFresh = "0";
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
    memoryFresh="0"
    memoryOld="0";
}

function btnDelete(){
    displayText = displayText.slice(0, -1);
    displayElement.innerHTML=displayText;
}

function btnAdd(){
    memoryNew = displayText;
    displayText = (parseFloat(memoryNew)+parseFloat(memoryOld)).toString();
    displayElement.innerHTML=displayText;
    memoryOld = displayText;
    freshNumber = true;  

}
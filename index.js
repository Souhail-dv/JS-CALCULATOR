const display = document.getElementById("display");

function appendToDisplay(input){
     display.value = input + display.value;
}
function  clearDisplay(){
    display.value = "";
}
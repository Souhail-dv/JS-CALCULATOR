const display = document.getElementById("display");

function appendToDisplay(input){
     display.value = input + display.value;
}
function  clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
const display = document.getElementById("display")

function appendValue(numberValue){
    display.value += numberValue;
}

function clearDisplay(){
    display.value = ''
}

function calculate(){
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = 'Error'
    }
}
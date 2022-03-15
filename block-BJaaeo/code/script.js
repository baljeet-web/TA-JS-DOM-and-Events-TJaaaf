var screen = document.querySelector(`.screen`)
var buttons = document.querySelectorAll(`button`)
var screenValue = ``;
for (var item of buttons){
    item.addEventListener(`click`,e=>{
        printedText = e.target.innerText;
        console.log(`The button pressed is ${printedText}`)
        if (printedText == `C`){
            screenValue = ``;
            screen.value = screenValue
        }
        else if(printedText == `=`){
            screen.value = eval(screenValue)
        }
        else{screenValue += printedText
        screen.value = screenValue;
        }
    })
}
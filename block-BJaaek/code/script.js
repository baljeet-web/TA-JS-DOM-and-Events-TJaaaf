
let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");


function randomColor(){
    let hexColor = ["0", "1", "2", "3", "4", "5",
"6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];


let color = "#";
for(let i =0 ; i < 6 ; i++){
   let rand = Math.floor(Math.random() *16);
   color = color + rand;
}
return color;
}

function doClick() {
    let ranColor = randomColor();
    box1.style.backgroundColor = ranColor;
}


function domouse() {
    let ranColor = randomColor();
    box2.style.backgroundColor = ranColor;
}


box1.addEventListener("click",doClick);



box2.addEventListener("mousemove",domouse);

{/* <div class="boxes">
    <div class="box">
     </div>
     <div class="box">
     </div>
     <div class="box">
     </div>
     <div class="box">
     </div>
 </div> */}



var div = document.querySelector(`div`);


for(var i =0; i<500; i++){
    var box = document.createElement(`div`);
    box.className = (`box`);
    div.append(box);

    var p = document.createElement(`p`);
    function randomNum(max) {
        return Math.floor(Math.random() * max);
    }
    randomNum(500);
    p.innerHTML = randomNumber;
    box.append(p);

}

function randomColor(){
    var hexArr = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ]
    let color = `#`;
    for (let i = 0; i<6; i++){
        let rndCol = Math.floor(Math.random() * 16)
        color = color + hexArr[rndCol]
    }
    return color;
}


function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

let allBoxes = document.querySelectorAll(`.box`);
function mouseMove () {
    allBoxes.forEach((box) => {
        box.style.backgroundColor = randomColor();
        box.querySelector("p").innerHTML = randomNumber(500);
    
    });
    }
    


div.addEventListener(`mousemove`, mouseMove);


let boxes = document.querySelectorAll(`.box`);

boxes.forEach((box, index) => {
    box.addEventListener(`click`, (Event)=>{
        Event.target.innerText = index + 1;
         setTimeout(()=>{
            Event.target.innerText = " "
        },2000)
    }
    
    )
})
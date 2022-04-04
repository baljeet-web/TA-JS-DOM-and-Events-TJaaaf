let root = document.querySelector(`section`);


let count = 0;

const getData = () => [
    {
     name : "dog" ,
     img : ``
    },
    {
        name : "heart" ,
        img : ``
       },
       {
        name : "fire" ,
        img : `.//images/download.png`
       },
       {
        name : "ice" ,
        img : `.//images/ice.jfif`
       },
       {
        name : "pumpkin" ,
        img : `.//images/pumpkin'.png`
       },
       {
        name : "thunder" ,
        img : `.//images/thunder.jfif`
       },
       {
        name : "xmas" ,
        img : `.//images/xmas.png`
       },
       {
        name : "sun" ,
        img : `.//images/sun.png`
       },
       {
        name : "thunder" ,
        img : `.//images/thunderC.jfif`
       },
       {
        name : "ice" ,
        img : `.//images/iceC.jfif`
       },
       {
        name : "pumpkin" ,
        img : `.//images/pumpkin'C.png`
       },
       {
        name : "fire" ,
        img : `.//images/downloadC.png`
       },
       {
        name : "sun" ,
        img : `.//images/sunC.png`
       },
       {
        name : "heart" ,
        img : `.//images/heartC.png`
       },
       {
        name : "xmas" ,
        img : `.//images/xmasC.png`
       },
       {
        name : "boo" ,
        img : `.//images/booC.png`
       }
   ]

// Randomize the cards 

const randomize = () =>  {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};


// Card Generator

const cardGen = () => {
    const cardData = randomize();

    // HTML for Card 
    cardData.forEach((item) => {
        const card = document.createElement(`div`);
        const face = document.createElement(`img`);
        const back = document.createElement(`div`);
    
        face.src = item.img;
        card.setAttribute(`name` , item.name);
        card.classList.add("card");
        face.classList.add("face");
        back.classList.add("back");

        card.appendChild(face);
        card.appendChild(back);
        root.appendChild(card);

        card.addEventListener(`click`, (event) => {
            card.classList.add("toggleCard");
            checkCrd(event);
        });
    });

}

// Check the cards 

const checkCrd = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    console.log(flippedCards);

    if(flippedCards.length === 2)
     {
         count ++;
        if(
            flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name")
        ){
            console.log("Won");  
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });

        }else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
        }
    }
    return count;
};
cardGen();

let root = document.querySelector(".box");

let tags = document.querySelector(".houses");

let search = document.querySelector(".search");

let  allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let allHouses = got.houses.map((house) => house.name);

let activeHouse = "";



function createCards(data = []){
    root.innerHTML = "";

    data.forEach((people) => {

        let li = document.createElement("li");
        li.classList.add("card");
        let img = document.createElement("img");
        img.src = people.image;
        let h2 = document.createElement("h2");
        h2.innerText = people.name;
        let p = document.createElement("p");
        p.innerText = people.description;
        let btn = document.createElement("button");
        btn.innerText = "Know More";
    
        li.append(img,h2,p,btn);
        root.append(li);
    
    })

}


function createTags(data = []) {
  
    data.innerHTML = "";
    
    data.forEach((tag) => {
        let li = document.createElement("li");
        li.innerText = tag;
        li.classList.add("houseBtn");

        if(activeHouse === tag) {
          li.classList.add("active");
        }

        li.addEventListener(`click`, () => {
            activeHouse  = tag;
            let peopleofHouse = got.houses.find((house) => house.name === tag).people || [];
            createCards(peopleofHouse);
            createTags(allHouses)
        });
        tags.append(li);
    });
}




function handleSearch(event){
    let text = event.target.value;
    let foundPeople = allPeople.filter((ppl) => ppl.name.toLowerCase().includes(text.toLowerCase()));
    createCards(foundPeople);
}

search.addEventListener("input", handleSearch);

createCards(allPeople);
createTags(allHouses);
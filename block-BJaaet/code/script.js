var lists = document.querySelectorAll(`li`);
var forms = document.forms;


// deleting movie
for (var list of lists){
    list.addEventListener(`click`, (e)=>{
        if(e.target.className == `delete`){
            console.log(e.target.parentElement.parentElement.remove());
        }
    })
}


//add movie
var input = document.querySelector(`.add-movie`)
var addForm = forms[input];


addForm.addEventListener(`submit`,(e)=>{
e.preventDefault();
var li = document.createElement(`li`)
li.className = (`flex`);
var span = document.createElement(`span`);

span.className = (`movie-name`);
var value = document.querySelector(`input[type="text"]`).value
span.textContent = value;
var span2 = document.createElement(`span`);
var button = document.createElement(`button`);
button.innerText = (`Delete`)
button.className = (`delete`)
var ul = document.querySelector(`ul`);
// appending to align according to html
ul.append(li);
li.append(span, span2);
span2.append(button);

})



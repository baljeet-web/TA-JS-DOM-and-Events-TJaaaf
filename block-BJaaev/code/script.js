{/* <li>
    <span>
        <input type="checkbox"
        name="checkbox" id="checkbox">
    </span>
    <span class="Para">
        Make ToDo App
    </span>
    <span class="delete">
        <button>
            Delete
        </button>
    </span>
</li> */}


// create UI
var ul = document.querySelector(`ul`)
function createUI(){
    var li = document.createElement(`li`);
    var span1 = document.createElement(`span`);
    var input = document.createElement(`input`);
    input. setAttribute('type', 'checkbox');
    var span2 = document.createElement(`span`);
    span2.className = (`para`);
    span2.textContent = addTodo();
    var span3 = document.createElement(`delete`);
    span3.className = (`delete`);
    var button = document.createElement(`button`);
    button.textContent = "Delete";

    // aappending

    ul.append(li);
    li.append(span1,span2,span3);
    span1.append(input);
    span3.append(button);
}

var header = document.querySelector(`header`);
var button1 = document.querySelector(`.btn`)
var input1 = document.querySelector(`.add-todo`)

function addTodo(){
    input1.addEventListener(`click`,(e)=>{
        return createUI()
    })
}addTodo()

button1.addEventListener(`click`,addTodo());
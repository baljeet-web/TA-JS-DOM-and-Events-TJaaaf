var userData = {};
var names = document.querySelector(`#name`);
var email = document.querySelector(`#email`);
var gender = document.querySelector(`#gender`);
var color = document.querySelector(`#color`);
var range = document.querySelector(`#range`);
var terms = document.querySelector(`#terms`);
var form = document.querySelector(`.container`);


function handleName(event){
   userData.name =event.target.value
}
function handleEmail(event){
    userData.email =event.target.value
 }
 function handleGender(event){
    userData.gender =event.target.value
 }
 function handleColor(event){
    userData.color =event.target.value
 }
 function handleRange(event){
    userData.range =event.target.value
}


 function handleTerms(event){
    userData.terms = event.target.checked
}

function handleSubmission(event){
    event.preventDefault()
    alert(`Congratulations!, The form has been submitted`)
}


let updatedName = names.addEventListener("input",handleName)&&document.querySelector(`.Updated-Name`)
let updatedEmail = email.addEventListener("input",handleEmail)
let updatedGender = gender.addEventListener("input",handleGender)
let updatedColor = color.addEventListener("input",handleColor)
let updatedRange = range.addEventListener("input",handleRange)
let updatedTerms = terms.addEventListener("input",handleTerms)
let updatedForm = form.addEventListener(`submit`, handleSubmission)


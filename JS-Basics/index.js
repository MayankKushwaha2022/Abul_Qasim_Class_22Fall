let name = 'Mayank';
let age = 33;
let isApproved = false;
let firstName = undefined;
let lastName = null;

let person = {
    name:'Mayank',
    age:30
};

console.log(person);

person.name = 'John';
console.log(person.name);

person['name'] = 'Mary';
console.log(person.name);
//below is an object:
let selectedColors = ['red','blue'];
selectedColors[2]='green';
selectedColors[3]=1;
console.log(selectedColors);
//console.log(selectedColors[0]);
console.log(selectedColors.length);

//name is a parameter and john is an argument passed in the function below.
function greet1(name) {
    console.log("Hello " + name);
}
greet1('John');

function greet2(name, lastName) {
    console.log("Hello " + name + ' ' + lastName);
}
greet2('John','Smith');

function square(number){
    return number*number;
}

console.log(square(10));

//DOM Manipulation


//GetEelementbyID()

const title = document.getElementById('main-heading');

console.log(title);

//GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//

const button = document.querySelector('button')

button.addEventListener("click", e=>{
    console.log("This runs first")
})

button.addEventListener("click", e=>{
    console.log("This runs second")
})

/* Validate that the textarea named "comments" in the form named "form" has some text. */
if (form.comments.value.trim().length == 0) {// check length of textarea
    errors.innerHTML += "<p>* No input! Please enter your comments.</p>"};
//alert("hello!!");
const alertCheckbox1 = document.getElementById('checkbox1');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


let refresh = () => window.location.reload();

alertCheckbox1.addEventListener('click',e => {
    alert('We are working on this service, please be patient with us!');
});

//-------------------------Work in Progress--------------------------------------------//
//const checkbox = document.getElementById("checkbox_id");
const alertCheckbox2 = document.getElementById('checkbox2');
const text123 = document.getElementById("check-text");


//----------------------------------------------------------------------------//
function clickCheckBox2() {
  //document.form.email.value.length === 0  
if (alertCheckbox2.checked === true){
    text123.style.display = "none";
    
  } 
  
else if (alertCheckbox2.checked === false && document.querySelector('#checkBoxError')=== null ) {
    var errElem = document.createElement('p')
        errElem.innerHTML= "*Please accept the terms and conditions"
        errElem.style.color = 'red'
        errElem.setAttribute('id', 'checkBoxError');
        errElem.after(alertCheckbox2);
        alertCheckbox2.after(errElem);
        //alertCheckbox2.remove(errElem);
  }
}
//----------------------------------------------------------------------------//


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    //const re = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPassword = password => {
    //const rp  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const rp  = /^((?=.*[a-z])(?=.*[A-Z]).{6,})$/;
    return rp.test(String(password));
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(usernameValue === '') {
        setError(username,'Username is required');
    } else if (usernameValue.length > 20 ){
        setError(username,'Username must be less than 20 characters')
    } else{
            setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email is required');
    }else if (!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password,'Password is required');
    } else if (passwordValue.length < 6 ){
        setError(password,'Password must be at least 6 character.')
    } else if (!isValidPassword(passwordValue)){
        setError(password,'Password must have at least one Uppercase and a lowercase letter')
    }
    else {
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2,'Please confirm your password');
    } else if (password2Value !== passwordValue ){
        setError(password2,'Password does not match')
    } else {
        setSuccess(password2);
    }

}










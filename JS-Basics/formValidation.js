//alert("hello!!");

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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
    } else {
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









//---------------------------------------------------------------------------//

//alert(document.form.email.value)

document.form.email.addEventListener('blur',validateEmail());

function validateEmail(){
    if(document.form.email.value.length === 0){
        var errElem = document.createElement('p')
        errElem.textContent = "Fix your email dude!!!"
        errElem.style.color = 'red'


    }
}
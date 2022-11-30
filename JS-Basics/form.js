function validate(){
    var mail=document.getElementById("email").value

    var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(regex.text(mail)){
        alert('You have provided a vliad email id')
        return true
    } else {
        alert('Sorry incorrect email id')
        return false;
    }
}
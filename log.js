let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color ="Blue";
        return true;
    }
    else{
        error.innerHTML = "Invalid Email ID";
        error.style.color ="red";
        return false;
    }
}
let password = document.getElementById("exampleInputPassword1");
let error1 = document.getElementById("passerror");

function validate() {
    var newPassword = document.getElementById('exampleInputPassword1').newPassword.value;
    var minNumberofChars = 8;
    var maxNumberofChars = 16;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    alert(newPassword); 
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars || newPassword == null){
        return false;
    }
    if(!regularExpression.test(newPassword)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
}


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
let error = document.getElementById("passerror");
function validate(){
let minNumberofChars = 8;
let maxNumberofChars = 16;
var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
if(minNumberofChars<8 || maxNumberofChars>16 && regexp.test(password.value)){
    error.innerHTML = "Valid";
    error.style.color ="Blue";
    return true;
       }
else{
    error.innerHTML = "Invalid Password characters";
    error.style.color ="red";
    return false; 
    
}
}



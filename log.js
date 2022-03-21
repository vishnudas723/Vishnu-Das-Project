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
    let minNumberofChars = 8;
    let maxNumberofChars = 16;
    let regexp  = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
    if(minNumberofChars<8){
        error.innerHTML = "Valid";
        error.style.color ="Blue";
        return true;
    }
    else{
        error.innerHTML = "Invalid Password";
        error.style.color ="red";
        return false;  
    }

}


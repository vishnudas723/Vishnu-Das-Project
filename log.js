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
    //let regexp1  = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
    //str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    if(minNumberofChars<8 || maxNumberofChars>16){
        error1.innerHTML = "Valid";
        error1.style.color ="Blue";
        return true;
    }
    else{
        error1.innerHTML = "Invalid Password";
        error1.style.color ="red";
        return false;  
    }

}
function checkPassword(str)
  {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    //return re.test(str);
    if(re.test(str)){
        error1.innerHTML = "Valid";
        error1.style.color ="Blue";
        return true;
    }
    else{
        error1.innerHTML = "Invalid Password";
        error1.style.color ="red";
        return false;  
    }
    }
  


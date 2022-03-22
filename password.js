let password = document.getElementById("exampleInputPassword1");
let error1 = document.getElementById("passerror");
function validate(){
let minNumberofChars = 8;
let maxNumberofChars = 16;
var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
if(minNumberofChars<8 || maxNumberofChars>16 && regexp.test(password.value)){
    error1.innerHTML = "Valid";
    error1.style.color ="Blue";
        return true;
       }
else{
    error1.innerHTML = "Invalid Password characters";
    error1.style.color ="red";
    return false; 
    
}
}
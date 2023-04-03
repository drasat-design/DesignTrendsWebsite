function validateEmail() {
    let emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.myForm.EMail.focus() ;
       return false;
    }
    return( true );
 }
 function CheckPassword(inputtxt) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct')
return true;
}
else
{ 
alert('The password must include at least one lower case, upper case, number and symbol!')
return false;
}
}

function GetDate() {
   let today = Date();
   let dd = today.getDate();
   let mm = today.getMonth() + 1;
   let yyyy = today.getFullYear();

   if (dd < 10) {
      dd = '0' + dd;
   }

   if (mm < 10) {
      mm = '0' + mm;
   }
    
   today = mm + '-' + dd + '-'  + yyyy;
   document.getElementById("meeting-time").setAttribute("min", today);
}
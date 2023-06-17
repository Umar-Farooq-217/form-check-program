function submit() {
    var arr = [];
    
    var userphone = document.getElementById('phone').value;
    var username = document.getElementById('name').value;
    var useremail = document.getElementById('mail').value;
    var showResult = document.getElementById('result').value;
  document.getElementById("result").innerHTML= arr;
   var usercnic= parseInt( document.getElementById('cnic').value)
    var obj = {
        name: username,
        phone: userphone,
        email: useremail,
        cnic: usercnic
    };
    arr.push(obj);

    if (username.split(' ').length > 1) {
        console.log('username',username);
      
    }
    else if (username.charAt(0) === username.charAt(0).toUpperCase()) {
        console.log('charAt',username);
    }
    else {
        console.log('please enter First and last Name with space');

    }


    console.log(arr);

    if (userphone.startsWith("92")) {
        console.log('userphone',userphone);
    }

    else {
        console.log("Please start Number with 92");

    }

    if (/(?:gmail|yahoo)/.test(useremail)) {
        console.log(useremail);
    }
    else {
        console.log("please enter gmail or yahoo mail");
    }

    

    if (usercnic.toString().length === 13 ) {
        console.log("User CNIC:", usercnic);
      } else {
        console.log("Invalid CNIC. Please enter 13 digits.");
      }
    
document.getElementById("result").innerHTML = "Name : "+obj.name+ "       Email : " + obj.email + "       Phone Number : " +obj.phone + "     CNIC : " + obj.cnic
}


 

  
   
 

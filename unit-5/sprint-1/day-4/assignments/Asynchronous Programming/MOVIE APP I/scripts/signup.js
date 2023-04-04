document.querySelector("form").addEventListener("submit", callform);
var signuparray = JSON.parse(localStorage.getItem("signup1"))||[];

function callform() {
  event.preventDefault();

  var name= document.getElementById("name").value;
  var Contact= document.getElementById("Contact").value;
  var email= document.getElementById("email").value;
  var password= document.getElementById("password").value;


var signup1={name:name,Contact:Contact,email:email,password:password};

signuparray.push(signup1);

localStorage.setItem("account-data",JSON.stringify(signuparray))
}


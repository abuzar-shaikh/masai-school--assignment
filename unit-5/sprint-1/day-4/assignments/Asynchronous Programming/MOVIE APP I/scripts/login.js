document.querySelector("form").addEventListener("submit",callform1);


function callform1(event){
    event.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    
   
    if(email==""|| password==""){
        alert("Please fill All the fields");
        return;
    }
   
    let data=JSON.parse(localStorage.getItem("account-data"))||[];
   
    data.map(function(elem,index){
        if(email==elem.email && password==elem.password){
            alert("login Successful");
            window.location.replace("index.html");
        }
        else{
            alert("Please Enter valid Email Id or Password")
        }
    });

}
document.querySelector("form").addEventListener("submit",callform);

var todoarry=JSON.parse(localStorage.getItem("todo"))||[];
// console.log(todoarry);
dispayetodo();

function dispayetodo(){
    document.querySelector("tbody").textContent="";
    todoarry.map(function(elem){
        var tr=document.createElement("tr");

        var td1=document.createElement("td")
        td1.textContent=elem.task;
    
        var td2=document.createElement("td")
        td2.textContent=elem.priority;
        if(elem.priority==="High"){
            td2.style.backgroundColor="red";
        }
        else{
            td2.style.backgroundColor="green";
        }
    
        var td3=document.createElement("td")
        td3.textContent="delete";
        td3.addEventListener("click",deletfun);
    
        tr.append(td1,td2,td3);
        document.querySelector("tbody").append(tr);
    



    })
}

function callform(){
    document.querySelector("tbody").textContent="";
    event.preventDefault();

    var task=document.getElementById("task").value;
    var priority=document.getElementById("priority").value;

 var todo={task:task,priority:priority};
//  Array of object
todoarry.push(todo)

dispayetodo();


 localStorage.setItem("todo",JSON.stringify(todoarry));

    if(task===""||priority===""){
        alert("please fill all form")
        return;
    }

    var tr=document.createElement("tr");

    var td1=document.createElement("td")
    td1.textContent=task;

    var td2=document.createElement("td")
    td2.textContent=priority;
    if(priority==="High"){
        td2.style.backgroundColor="red";
    }
    else{
        td2.style.backgroundColor="green";
    }

    var td3=document.createElement("td")
    td3.textContent="delete";
    td3.addEventListener("click",deletfun);

    tr.append(td1,td2,td3);
    // document.querySelector("tbody").append(tr);

}

function deletfun(){
   event.target.parentNode.remove();
}
 



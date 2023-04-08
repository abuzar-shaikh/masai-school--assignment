import navbar from './components/navbar.js'
import {getData,appendData} from "./utils/getAndShowData.js"


let container=document.getElementById("container");
container.innerHTML=navbar();

let mainContainer=document.getElementById("main-container");

let response=getData(
    `https://fakestoreapi.com/products/category/electronics`
);

response.then((res)=>{
    appendData(res,mainContainer);
}).catch((err)=>{
    console.log(err);
})


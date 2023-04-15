import navbar from "./components/navigationBar.js";
import { getData, appendData } from "./utils/getAndShowData.js";

let navbarContener = document.getElementById("navbar-contener");
navbarContener.innerHTML = navbar();

let mainContainer = document.getElementById("main-container");

let response = getData(
  `https://fakestoreapi.com/products/category/electronics`
);

response
  .then((res) => {
    appendData(res, mainContainer);
  })
  .catch((err) => {
    console.log(err);
  });

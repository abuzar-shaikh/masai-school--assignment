const getCategoriesData = async () => {
  // code here
  try{
    let data=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    data=await data.json();
    console.log("category data",data)
    return data;
  }catch(error){
    return "something went wrong";
  }
};

const getIngredientData = async () => {
  // code here
  try{
    let data= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
    data=await data.json();
    console.log("ingredient data",data);
    return data;
  }catch(error){
    return "something went wrong";
  }

};

window.onload = function () {
  //  get the buttons here and add click event
  document.getElementById("get-category-data").addEventListener("click",getCategoriesData)
document.getElementById("get-ingredient-data").addEventListener("click",getIngredientData)
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}

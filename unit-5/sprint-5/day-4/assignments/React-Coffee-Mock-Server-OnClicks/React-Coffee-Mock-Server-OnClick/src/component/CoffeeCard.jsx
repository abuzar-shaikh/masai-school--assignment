import React from "react";
import "./CoffeeCard.css";
const CoffeeCard = ({ ele }) => {
  console.log(ele);
  return (
    <div id="coffeeCard-mainDiv">
      <div>
        <img src={ele.image} alt="" />
      </div>
      <div id="coffeeCard-textData">
        <h2 className="title">{ele.title}</h2>
        <p className="price">{"₹ " + ele.price}</p>
        <p className="description">{ele.description}</p>
        <ul className="ingredient">
          {ele.ingredients.map((ingred) => (
            <li>{ele.ingredients}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoffeeCard;

import React from "react";
// import sty from "./CofeeCard.module.css"
import style from "../component/CofeeCard.module.css";

const CofeeCard = ({ elem }) => {
  console.log(elem);
  return (
    <div className="coffee_card">
      <img src={elem.image} alt="abc" />
      <div>
        <h2 className="title">{/* coffee name */ elem.title}</h2>
        <p className="price">{/* coffee price */ elem.price}</p>
        <p>{/* coffee description */ elem.description}</p>

        <ul className="ingredients">
          {elem.ingredients.map((ingri) => {
          return  <li>{elem.ingredients}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CofeeCard;

import React from "react";
function Productcard({ item }) {
  return (
    <div>
      <img
        src={item.image}
        alt="##"
        style={{ width: "200px", height: "200px" }}
      />
      <h3>title:-{item.title}</h3>
      <h3>price:-{item.price}</h3>
      <h3>category:-{item.category}</h3>
    </div>
  );
}
export default Productcard;

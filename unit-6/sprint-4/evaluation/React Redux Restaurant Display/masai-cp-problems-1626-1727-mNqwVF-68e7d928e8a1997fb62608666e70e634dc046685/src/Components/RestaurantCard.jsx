import React from "react";
import { useNavigate } from "react-router-dom";
const RestaurantCard = ({
  id,
  image,
  name,
  number_of_votes,
  price_starts_from,
  rating,
  type,
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/restaurant/${id}`)}>
      <div>
        <img src={image} />
      </div>

      <div>
        <h3>name:{name}</h3>
        <h4>type:{type}</h4>
        <p>votes:{number_of_votes}</p>
        <p>Price:{price_starts_from}</p>
        <p>Rating:{rating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

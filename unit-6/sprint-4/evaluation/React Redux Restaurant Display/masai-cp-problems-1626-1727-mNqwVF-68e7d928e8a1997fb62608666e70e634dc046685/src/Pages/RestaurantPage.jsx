import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSingleRestaurant } from "../Redux/action";
const RestaurantPage = () => {
  const { id } = useParams();
  const { restaurant: item } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [book, setbook] = useState(false);
  const [massage] = useState("Restaurant Booked Successfully!!!");

  useEffect(() => {
    dispatch(getSingleRestaurant(id));
  }, [id]);
  return (
    <div className="restaurant_single_wrapper">
      {/* Show success message here if restaurant booked successfully */}
      <div>{book && <h1>{massage}</h1>}</div>
      {/* Create Restaurant Details Card Here */}
      <div>
        <div>
          <img src={item?.image} alt="" />
        </div>
        <div>
          <h3>name:{item?.name}</h3>
          <h3>Type:{item?.type}</h3>
          <p>Rating:{item?.rating}</p>
          <p>Votes:{item?.number_of_votes}</p>
          <p>Price:{item?.price_starts_from}</p>
          {book ? (
            <Link to="/">Go to Home</Link>
          ) : (
            <button onClick={() => setbook(true)}> Book Now !</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;

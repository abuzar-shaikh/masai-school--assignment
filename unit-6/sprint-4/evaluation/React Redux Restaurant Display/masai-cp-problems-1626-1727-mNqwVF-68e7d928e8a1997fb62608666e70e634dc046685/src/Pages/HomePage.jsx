import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../Redux/action";
import RestaurantCard from "../Components/RestaurantCard";
import Pagination from "../Components/Pagination";
const HomePage = () => {
  // Show below loading indicator while data is being loaded
  // <h1 className="loading_indicator">Loading...</h1>;
  const { isLoding, Restaurants, TotalPages } = useSelector((store) => store);
  const [currentPage, setcurrentPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants({ page: currentPage, limit: 9 }));
  }, [currentPage]);

  if (isLoding) {
    return <h1>Loding......</h1>;
  }
  return (
    <div>
      <div className="restaurants_wrapper">
        {/* Import RestaurantCard.jsx and populate restaurants data */}

        {Restaurants.length > 0 &&
          Restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
      </div>
      {/* Import Pagination.jsx and pass required props*/}
      <div>
        {TotalPages && (
          <Pagination
            TotalPages={TotalPages}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;

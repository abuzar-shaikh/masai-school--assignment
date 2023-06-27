import React from "react";
import { Route, Routes } from "react-router-dom";
import RestaurantPage from "../Pages/RestaurantPage";
import HomePage from "../Pages/HomePage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="restaurant/:id" element={<RestaurantPage />} />
    </Routes>
  );
};

export default AllRoutes;

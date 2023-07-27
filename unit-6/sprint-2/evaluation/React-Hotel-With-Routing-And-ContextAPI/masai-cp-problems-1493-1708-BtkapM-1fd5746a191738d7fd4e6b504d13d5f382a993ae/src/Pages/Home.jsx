import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div data-cy="welcome-text">
      <h1>
        Wellcome to Home Page, Click here to <Link to="/login">login</Link>
      </h1>
    </div>
  );
};

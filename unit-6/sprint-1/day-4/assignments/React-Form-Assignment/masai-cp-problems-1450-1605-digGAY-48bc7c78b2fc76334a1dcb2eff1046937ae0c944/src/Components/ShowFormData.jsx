import React from "react";
import "./ShowFormData.css";

const ShowFormData = () => {
  return (
    <div>
      <h1>Form Data</h1>

      <h3 data-cy="first-name">First Name: </h3>

      <h3 data-cy="last-name">Last Name:</h3>

      <h3 data-cy="email">Email: </h3>

      <h3 data-cy="password">Password: </h3>

      <h3 data-cy="phNumber">Phone: </h3>

      <h3 data-cy="country">Country: </h3>

      <h3 data-cy="birth-date">Birth Date:</h3>

      <h3 data-cy="marriage-status">{/* Married then "Yes" else "No" */}</h3>

      <h3 data-cy="image-url">Image URL: </h3>

      <h3 data-cy="gender">Gender: </h3>
    </div>
  );
};

export default ShowFormData;

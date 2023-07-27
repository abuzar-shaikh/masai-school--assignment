import React, { useState, useEffect } from "react";
import { useParams, link, json } from "react-router-dom";

export const SingleRoom = () => {
  const [singledata, setsingledata] = useState({});
  const [toggle, settoggle] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms/${id}`
    )
      .then((res) => res.json())
      .then((res) => setsingledata(json));
  }, [toggle]);
  console.log(toggle);
  return (
    <div data-testid="SingleRoom">
      <div data-testid="room-info">
        <h2>{singledata.name}</h2>
        <img src={singledata.image} width="100px" height="100px" />
        <p>{singledata.description}</p>
        <h3>{singledata.bathroom}</h3>
        <h3>{singledata.capacity}</h3>
        <h3>{singledata.size}</h3>
        <h3>{singledata.price}</h3>
        <h3>Amenities</h3>
        <ul>
          {singledata.amenities?.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        {toggle ? (
          <button onClick={() => settoggle(false)}>Book Now</button>
        ) : (
          <h3>
            Booking Successful goto <link to="/dashboard">Dashboard</link>
          </h3>
        )}
      </div>
    </div>
  );
};

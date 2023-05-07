import React from "react";

export default function User({ item }) {
  return (
    <div
      data-testid="user"
      style={{
        width: "50%",
        margin: "20px auto",
        padding: "50px",
        boxShadow: "0 0 10px black",
      }}
    >
      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <img src={item.img} style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <h3>{item.name}</h3>
          <h3>{item.position}</h3>
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        <input data-testid="level" type="range" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "50px",
        }}
      >
        <div>
          <h3>professional level {item.level}</h3>
        </div>
        <div>
          <h3>{item.points} points</h3>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { login, isAuth } = useContext(AuthContext);
  const inputvalues = {
    email,
    password,
  };
  console.log(email, password);
  const handalSubmit = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputvalues),
    })
      .then((res) => res.json())
      .then((res) => login(res.token));
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <form className="auth_form">
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="email"
          className="email"
          placeholder="Enter Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <br />
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="password"
          className="password"
          placeholder="Enter password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <input className="submit" type="submit" onClick={handalSubmit} />
      </form>
    </div>
  );
}

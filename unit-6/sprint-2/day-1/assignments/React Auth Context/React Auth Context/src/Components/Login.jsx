import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Login() {
  const { setisloggedin } = useContext(AuthContext);

  const handelsubmit = (event) => {
    event.preventDefault();
    setisloggedin({ loading: false });
  };

  return (
    <div>
      <form data-testid="auth_form" onSubmit={handelsubmit}>
        <input type="email" data-testid="email" placeholder="Enter Email" />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

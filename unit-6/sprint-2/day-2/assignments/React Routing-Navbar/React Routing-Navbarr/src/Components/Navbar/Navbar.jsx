import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const links = [
    { path: "/", title: "Home" },
    { path: "/contact", title: "Contact" },
    { path: "/about-us", title: "About" },
    { path: "/services", title: "Services" },
    { path: "/login", title: "Login" },
  ];
  return (
    <div>
      {
        /* add your links */ links.map((elem) => {
          return (
            <div>
              <Link key={elem.path} to={elem.path}>
                {elem.title}
              </Link>
            </div>
          );
        })
      }
    </div>
  );
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const links = [
    { path: "/login", title: "Login" },
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/products", title: "Products" },
  ];
  return (
    <div className="navbar">
      {links.map((e) => {
        return (
          <div>
            <Link key={e.path} to={e.path}>{e.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export { Navbar };

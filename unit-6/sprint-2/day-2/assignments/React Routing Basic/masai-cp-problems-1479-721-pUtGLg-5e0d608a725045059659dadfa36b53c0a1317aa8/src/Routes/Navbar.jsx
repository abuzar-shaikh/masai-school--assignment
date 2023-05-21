import React from "react";
import style  from "../Pages/Button.module.css"
import { Link } from "react-router-dom";
function Navbar() {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/products", title: "Products" },
  ];
  return (
    <div className="navbar" id={style.linkNavMain} >
      {links.map((e) => {
        return <Link key={e.path} to={e.path} id={style.linkNav}>{e.title}</Link>;
      })}
    </div>
  );
}

export { Navbar };

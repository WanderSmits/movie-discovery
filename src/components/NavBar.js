import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/discover"
      >
        Discover
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold", color: "red" }} to="/about">
        About this website
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", cololr: "red" }}
        exact={true}
        to="/"
      >
        Homepage
      </NavLink>
    </div>
  );
}

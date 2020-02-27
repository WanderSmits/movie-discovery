import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink exact={true} to="/discover">
        Discover
      </NavLink>
      <NavLink to="/about">About this website</NavLink>
      <NavLink to="/">Homepage</NavLink>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthMenu() {
  return (
    <div>
      <NavLink to="/register">
        Sign Up
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </div>
  );
}

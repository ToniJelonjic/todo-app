import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <ul>
        <li className="item">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/login">
            Login
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

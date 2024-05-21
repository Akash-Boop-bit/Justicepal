import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h1>Marginalized Groups</h1>
      <ul>
        <li>
          <Link to="/">Chat</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/elderly">Senior Citizen</Link>
        </li>
        <li>
          <Link to="/adivasis">Adivasis</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/dalits">Dalits</Link>
        </li>
        <li>
          <Link to="/religious">Religious minorities</Link>
        </li>
        <li>
          <Link to="/children">Children</Link>
        </li>
        <li>
          <Link to="/disabled">People with disabilities</Link>
        </li>
      </ul>
      <ul className={classes.last}>
        <li>
          <Link to="/ngo">NGO</Link>
        </li>
        <li>
          <Link to="/case">Case Study</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

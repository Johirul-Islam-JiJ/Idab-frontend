import React, { useState } from "react";
import "../Style/navbar_style/navbar.css";
import "../bootstrap_4/css/bootstrap-grid.min.css";
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        IDAB
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/About" className="nav__link">
            About IDAB
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Member" className="nav__link">
            Members
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Constitution" className="nav__link">
            Constitution
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Event" className="nav__link">
            Events
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Notice" className="nav__link">
            Notice
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/publication" className="nav__link">
            Publication
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Course" className="nav__link">
            Courses
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

function CustomLink({ to,children,...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname,end:true})
  return(
    <li className={isActive ?"active":""}>
      <Link to={to} {...props}>
        {children}
        </Link>
    </li>
  )
}

export default Navbar;
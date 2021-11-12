import React, { useState } from "react";
import { NavbarData } from './NavbarData'
import { Link } from 'react-router-dom'
import './navbar.css';

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "Black"}}>
  <a className="navbar-brand" href="#">Gift Shop</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {NavbarData.map((item, index) => {
        return (
          <li key={index} className={item.cname}>
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
      
      {/* <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./AboutUs/AboutUs">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Orders</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">UserName</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" href="./Products/Products" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cart</a>
      </li> */}
    </ul>
  </div>
</nav>
    </>
  );
}

export default Navbar;

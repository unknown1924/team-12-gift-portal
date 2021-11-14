import React, { useState, useContext } from "react";
import { NavbarData } from './NavbarData'
import { Link } from 'react-router-dom'
import './navbar.css';

import { userContext } from '../../App'

function Navbar() {

  const [navbar, setNavbar] = useState(false)
  const { userData, loggedInData } = useContext(userContext)

  const [user, setUser] = userData;
  const [loggedIn, setLoggedIn] = loggedInData;



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "Black" }}>
        <a className="navbar-brand" href="/Home">Gift Shop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* {NavbarData.map((item, index) => {
        return (
          <li key={index} className={item.cname}>
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })} */}

            <li className="nav-text">
              <Link to='/Home'>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to='/AboutUs'>
                <span>About Us</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to='/Products'>
                <span>Products</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to='/Order'>
                <span>Order</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to='/SendGift'>
                <span>Send Gift</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to='/RaiseComplaint'>
                <span>Complaint</span>
              </Link>
            </li>
            {/* <li className="nav-text">
        <Link to='/Login'>
          <span>Login</span>
        </Link>
      </li> */}

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
          <ul className="random">
            <li className="nav-text">
              <Link to='/User'>
                <span>{user == "test" ? "Login here ➡️" : "Welcome! "+user}</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to='/Login'>
                <span>{loggedIn ? "Logout" : "Login"}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

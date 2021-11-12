import React, { useState } from "react";
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { useContext } from "react";
import axios from 'axios';

import { Form, Row, Col, Button } from 'react-bootstrap'

import User from '../User/User';


function Login (props) {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);
//   const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const userdata = {
        "userId": 17,
        "username": "red lantern",
        "role": null,
        "password": "new10",
        "userEmail": "newuse@gmail.com",
        "nameofUser": "Aasdfa",
        "userMobile": 0,
        "address": null,
        "order_list": [
            {
                "orderId": 1,
                "order_date": null,
                "gift_id": 0,
                "order_Quant": 0,
                "rx_address": null,
                "rx_phone": 0,
                "orderStatus": "Placed",
                "surprise": false,
                "total_amt": 0.0
            }
        ]
  }

    const axiosGet = async () => {
      const response = await axios.get('http://localhost:8080/admin/showAllUsers', userdata);
      console.log("Login");
      console.log(response); 
      setUserList(response.data);
    }

  const handleLogin = (e) => {
    e.preventDefault();
    axiosGet();
  }

  console.log(userName);
  console.log(password);

  console.log(userList.forEach(user => {
      if(user.username == userName && user.password == password) {
          console.log("success");
          props.setLoggedIn(true);
          if(user.username == 'admin')
            props.setAdmin(true);
      }
      else console.log("failed");

      console.log(props.loggedIn);
  }));

  const [user, setUser] = useState()

  const style = {
width:"50vw", display:"flex", justifyContent:"center", alignItems:"center", border:"1 px solid blue"
  };

    return (
    <Router>
        <div>
            <h1 style={{textAlign:"center"}}>Hi there</h1>


        <div  style={style}>
          <form>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" 
      onChange={e => {
        setUserName(e.target.value);
      }} 
    />
    <label class="form-label" for="form2Example1">Username</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control"
      onChange={e => {
        setPassword(e.target.value);
      }}   
    />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="form2Example34"
          
        />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button onClick={handleLogin} type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
          </div> 

        </div>
    </Router>
    );
}

export default Login;
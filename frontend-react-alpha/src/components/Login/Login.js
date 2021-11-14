import React, { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

import { userContext } from "../../App";
import Home from "../Home1/Home";

// export let userContext = createContext();
export let loginContext = createContext();

function Login() {

  const { userData, loggedInData } = useContext(userContext);
  const [user, setUser] = userData;
  const [loggedIn, setLoggedIn] = loggedInData;

  // const [user, setUser] = useState()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);

  // const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

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

  const axiosGetAllUser = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/showAllUsers');
      console.log(response);

      if (response.data.length == 0)
        alert("Server Maintenance, Visit Later!")

      setUserList(response.data);

    } catch (e) {
      // console.log(e);
      if (e.request.status == 200)
        alert("Server Maintenance, Visit Later!")
      else if (e.request.status >= 400)
        alert("Check your Internet!")
      else
        alert("FATAL ERROR!")
    }
  }


  const handleLogin = (e) => {
    e.preventDefault();
    axiosGetAllUser();
    // history.push("/Home")
  }

  const handleSignin = (e) => {
    history.push("/Signup")
  }

  const validateLogIn = () => {
    console.log(userList.length)

    for (let i = 0; i < userList.length; i++) {
      if (userList[i].username == userName && userList[i].password == password) {
        console.log("User Log in success");
        setUser(userName);
        setLoggedIn(true);

        if (userList[i].username == 'admin') {
          console.log("User is Admin!!")
          history.push("/admin")
          break;
        }

        history.push("/Home")
        break;
      }
      else console.log("failed");
    }

  }

  validateLogIn();


  console.log(userName);
  console.log(password);


  const style = {
    width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", border: "1 px solid blue"
  };

  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome Back!</h1>
        {/* <h2>{user}</h2> */}

        <div style={style}>
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
                  // checked
                  />
                  <label class="form-check-label" for="form2Example34"> Remember me </label>
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <Link to="/Home" onClick={handleLogin} class="btn btn-primary btn-block mb-4">Sign In</Link>
            {/* <button onClick={handleLogin} type="submit" class="btn btn-primary btn-block mb-4">Sign in</button> */}

            <div class="text-center">
              <p onClick={handleSignin}>Not a member? <a href="#!">Sign Up</a></p>

            </div>
          </form>
        </div>

      </div>
      {/* <Route path="/Home" component={Home}/>
      </Switch> */}
    </Router>
  );
}

export default Login;
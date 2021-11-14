import React, { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

import { userContext } from "../../App";
import Home from "../Home1/Home";

// export let userContext = createContext();
export let loginContext = createContext();

function Login() {

  const history = useHistory();

  const { userData, loggedInData } = useContext(userContext);
  const [user, setUser] = userData;
  const [loggedIn, setLoggedIn] = loggedInData;

  // const [user, setUser] = useState()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [nameOfUser, setNameOfUser] = useState('');
  const [userEmailId, setUserEmailId] = useState('');
  const [userPhoneNo, setUserPhoneNo] = useState('');

  const [userList, setUserList] = useState([]);

  // const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);


  let addUserData = {
    // "userId": null,
    "username": userName,
    "password": password,
    "userEmail": userEmailId,
    "nameofUser": nameOfUser,
    "userMobile": userPhoneNo,
    // "address": null,
    // "order_list": [
    //   {
    //     "orderId": 1,
    //     "order_date": null,
    //     "gift_id": 0,
    //     "order_Quant": 0,
    //     "rx_address": null,
    //     "rx_phone": 0,
    //     "orderStatus": "Placed",
    //     "surprise": false,
    //     "total_amt": 0.0
    //   }
    // ],
    // "complaint_list": null
  };


  const axiosGetAllUser = async () => {
    try {
      const response = await axios.get('https://giftshop-1636920008628.azurewebsites.net/admin/showAllUsers');
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

  const axiosPost = async () => {
    const response = await axios.post(`https://giftshop-1636920008628.azurewebsites.net/SignUp/signup`, addUserData);
    // console.log(response);
    // refreshPage();
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axiosGetAllUser();
    // history.push("/Home")
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

  // validateLogIn();

  function handleSignin() {
    axiosPost();
    history.push("/Home")
  }

  console.log(userName);
  console.log(password);

  // const refreshPage = () => {
  //   axiosGet();
  // }



  const style = {
    width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", border: "1 px solid blue"
  };

  return (
    <Router>

      <div>
        <h1 style={{ textAlign: "center" }}>Hello there New user!</h1>

        <div style={style}>
          <form>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form3Example1" class="form-control"
                    onChange={e => setUserName(e.target.value)}
                  />
                  <label class="form-label" for="form3Example1">Username</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form3Example2" class="form-control"
                    onChange={e => setNameOfUser(e.target.value)}
                  />
                  <label class="form-label" for="form3Example2">Name</label>
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control"
                onChange={e => setUserEmailId(e.target.value)}
              />
              <label class="form-label" for="form3Example3">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control"
                onChange={e => setUserPhoneNo(e.target.value)}
              />
              <label class="form-label" for="form3Example3">Phone</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form3Example4" class="form-control"
                onChange={e => setPassword(e.target.value)}
              />
              <label class="form-label" for="form3Example4">Password</label>
            </div>


            <Link to="/Home" onClick={handleSignin} class="btn btn-primary btn-block mb-4">Sign Up</Link>
            {/* <button  type="submit" >Sign up</button> */}

            {/* <div class="text-center">
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
            </div> */}
          </form>
        </div>

      </div>
      {/* <Route path="/Home" component={Home}/>
      </Switch> */}
    </Router>
  );
}

export default Login;

import React, { useState, useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import axios from "axios";

import { userContext } from "../../App";
import Home from "../Home1/Home";

// export let userContext = createContext();
export let loginContext = createContext();

function Login() {
  const { userData, loggedInData } = useContext(userContext);
  const [user, setUser] = userData;
  const [loggedIn, setLoggedIn] = loggedInData;

  // const [user, setUser] = useState()
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [userList, setUserList] = useState([]);

  // const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);
  const [loginerr, setLoginerr] = useState(false);
  const history = useHistory();

  const axiosGetAllUser = async () => {
    try {
      const response = await axios.get(
        "https://giftshop-1636920008628.azurewebsites.net/admin/showAllUsers"
      );
      console.log(response);

      if (response.data.length == 0) alert("Server Maintenance, Visit Later!");

      setUserList(response.data);
    } catch (e) {
      // console.log(e);
      if (e.request.status == 200) alert("Server Maintenance, Visit Later!");
      else if (e.request.status >= 400) alert("Check your Internet!");
      else alert("FATAL ERROR!");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosGetAllUser();
    validateLogIn();
    // history.push("/Home")
  };

  const handleSignin = (e) => {
    history.push("/Signup");
  };

  // const validateLogIn

  const validateLogIn = () => {
    console.log(userList.length);

    for (let i = 0; i < userList.length; i++) {
      if (
        userList[i].username == userName &&
        userList[i].password == password
      ) {
        console.log("User Log in success");
        setUser(userName);
        setLoggedIn(true);

        if (userList[i].username == "admin") {
          console.log("User is Admin!!");
          history.push("/admin");
          break;
        }

        history.push("/Home");
        break;
      } else {
        //setLoginerr(true);
        //alert("Invalid Credentials");

        console.log("invalid");
        setLoginerr(true);
        console.log(loginerr);
      }
    }
  };

  // validateLogIn();

  function goToHome() {
    setUser("test");
    history.push("/Home");
  }

  console.log(userName);
  console.log(password);

  const style = {
    width: "50vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1 px solid blue",
  };

  return (
    <Router>
      <div>
        <div>
          <button
            onClick={goToHome}
            type="button"
            class="btn btn-outline-primary"
            data-mdb-ripple-color="dark"
            style={{ margin: "20px" }}
          >
            <i class="fas fa-home"></i>
          </button>
          <h1 style={{ textAlign: "center" }}>Welcome Back!</h1>
        </div>
        <div className="container">
          <div class="row">
            <div
              class="col-sm"
              style={{ paddingTop: "10px", paddingRight: "50px" }}
            >
              <aside>
                <img src="https://media.istockphoto.com/photos/hands-giving-gift-closeup-picture-id871610664?k=20&m=871610664&s=612x612&w=0&h=_c05JTnGp5ziXNKS0QbQ3bDkvbXcxQVk2JS_bM4Wckc=" />
              </aside>
            </div>
            <div class="col-sm" style={style}>
              <form>
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form2Example1"
                    class="form-control"
                    required
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <label class="form-label" for="form2Example1">
                    Username
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    required
                    type="password"
                    id="form2Example2"
                    class="form-control"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label class="form-label" for="form2Example2">
                    Password
                  </label>
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
                      <label class="form-check-label" for="form2Example34">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>

                  {/* <div class="col">
                <a href="#!">Forgot password?</a>
              </div> */}
                </div>

                <Link
                  to="/Home"
                  onClick={handleLogin}
                  class="btn btn-primary btn-block mb-4"
                >
                  Sign In
                </Link>
                {/* <button onClick={handleLogin} type="submit" class="btn btn-primary btn-block mb-4">Sign in</button> */}

                <div class="text-center">
                  <p onClick={handleSignin}>
                    Not a member? <a href="#!">Sign Up</a>
                  </p>
                </div>
                <div>
                  {loginerr ? (
                    <div class="alert alert-danger" role="alert">
                      <h4>Invalid Credentials!!</h4>
                    </div>
                  ) : (
                    <p></p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Route path="/Home" component={Home}/>
      </Switch> */}
    </Router>
  );
}

export default Login;

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
import { useForm } from "react-hook-form";
import { userContext } from "../../App";
import Home from "../Home1/Home";

// export let userContext = createContext();
export let loginContext = createContext();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const { userData, loggedInData } = useContext(userContext);
  const [user, setUser] = userData;
  const [loggedIn, setLoggedIn] = loggedInData;

  // const [user, setUser] = useState()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nameOfUser, setNameOfUser] = useState("");
  const [userEmailId, setUserEmailId] = useState("");
  const [userPhoneNo, setUserPhoneNo] = useState(0);
  const [isError, setIsError] = useState(false);
  const [userList, setUserList] = useState([]);
  const [data, setData] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = () => {
    setIsError(false);

    const data = {
      username: userName,
      password: password,
      userEmail: userEmailId,
      nameofUser: nameOfUser,
      userMobile: userPhoneNo,
    };
    axios
      .post(
        `https://giftshop-1636920008628.azurewebsites.net/admin/addUser`,
        data
      )
      .then((res) => {
        setData(res.data);
        setUserName("");
        setPassword("");
        setNameOfUser("");
        setUserEmailId("");
        setUserPhoneNo("");
      })
      .catch((err) => {
        setIsError(true);
      });
    console.log(data);
    history.push("/Home");
  };
  const warningStyle = {
    color: "#870309",
  };

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
  // const addUserdata = {
  //   username: userName,
  //   password: password,
  //   userEmail: userEmailId,
  //   nameofUser: nameOfUser,
  //   userMobile: userPhoneNo,
  // };
  // const axiosPost = async () => {
  //   const response = await axios.post(
  //     `https://giftshop-1636920008628.azurewebsites.net/SignUp/signup`,
  //     addUserData
  //   );
  //   // console.log(response);
  //   // refreshPage();
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosGetAllUser();
    // history.push("/Home")
  };

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
      } else console.log("failed");
    }
  };

  // validateLogIn();

  // function handleSignin() {
  //   axiosPost();
  //   history.push("/Home");
  // }

  console.log(userName);
  console.log(password);

  // const refreshPage = () => {
  //   axiosGet();
  // }

  const style = {
    width: "50vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1 px solid blue",
    paddingTop: "10px",
    paddingRight: "50px",
  };

  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>Hello there New user!</h1>

        <div style={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form3Example1">
                    Username
                  </label>
                  <input
                    {...register("username", {
                      required: true,
                    })}
                    type="text"
                    className="form-control"
                    id="form3Example1"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {errors.username && (
                    <p style={warningStyle}>Please specify the username!</p>
                  )}
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form3Example2">
                    Name
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="text"
                    className="form-control"
                    id="form3Example2"
                    value={nameOfUser}
                    onChange={(e) => setNameOfUser(e.target.value)}
                  />
                  {errors.name && (
                    <p style={warningStyle}>Please specify your name!</p>
                  )}
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3">
                Email address
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                })}
                type="email"
                className="form-control"
                id="form3Example3"
                value={userEmailId}
                onChange={(e) => setUserEmailId(e.target.value)}
              />
              {errors.email && (
                <p style={warningStyle}>Please enter email correctly!</p>
              )}
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="phone">
                Phone number
              </label>
              <input
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
                type="number"
                className="form-control"
                id="phone"
                value={userPhoneNo}
                onChange={(e) => setUserPhoneNo(e.target.value)}
              />
              {errors.phone && (
                <p style={warningStyle}>
                  Please Enter the 10 digit recipient's contact number
                </p>
              )}
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example4">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
                type="password"
                className="form-control"
                id="form3Example4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p style={warningStyle}>
                  Password length must be between 6 to 12
                </p>
              )}
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                // onClick={(e) => {
                //   onSubmit();
                //   //history.push("/Home");
                // }}
              >
                Sign Up
              </button>
            </div>
            {/* <Link
                to="/Home"
                type="submit"
                class="btn btn-primary btn-block mb-4"
              >
                Sign Up
              </Link> */}
            {/* </div> */}
            {/* <button  type="submit" >Sign up</button>

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

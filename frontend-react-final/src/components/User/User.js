import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
import { userContext } from "../../App";
import Navbar from '../Navbar/Navbar';

function User() {

  const { userData, loggedInData } = useContext(userContext);
  const [user, setUser] = userData;

  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeUserId, setActiveUserId] = useState(0);
  const [activeUserName, setActiveUserName] = useState(null);

  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [nameOfUser, setNameOfUser] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userEmailId, setUserEmailId] = useState();
  const [userPhoneNo, setUserPhoneNo] = useState();

  // const [user, setUser] = useState({});

  let addUserData = {
    "userId": userId,
    "username": userName,
    "password": userPassword,
    "userEmail": userEmailId,
    "nameofUser": nameOfUser,
    "userMobile": null,
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
    ],
    "complaint_list": null
  };

  // Fetch all user list on load
  useEffect(() => {
    axiosGet();
  }, [])

  // GET: Fetch All user list
  const axiosGet = async () => {
    const response = await axios.get(`http://localhost:8080/user/${user}`);
    // console.log("Admin")
    // console.log(response);
    setUsers(response.data);
    console.log(users)
    // setLoading(false);
  }

  // POST: Add new user
  const axiosPost = async () => {
    const response = await axios.post(`http://localhost:8080/admin/addUser`, addUserData);
    // console.log(response);
    refreshPage();
  }

  console.log("UserID", addUserData.userId)

  // PUT: update user data by userId
  const axiosPutUserId = async () => {
    const response = await axios.put(`http://localhost:8080/admin/updateUser/${addUserData.userId}`, addUserData);
    console.log(response);
    refreshPage();
  }


  // const axiosPutByUserName = async () => {
  //   const response = await axios.put(`http://localhost:8080/admin/updateUser/admin/updateUserByName/${updateUserData.username}`, userName);
  //   console.log(response);
  //   refreshPage();
  // }


  // DELETE: delete user by userId
  const axiosDeleteByUserId = async (key) => {
    const response = await axios.delete(`http://localhost:8080/admin/deleteUser/${key}`);
    console.log("Delete success!")
    console.log(key)
    refreshPage();
  }


  const handleAdd = (e) => {
    e.preventDefault();
    axiosPost();
    console.log(addUserData);
  }

  const handleEdit = (e, key, userName, nameOfUser, userPassword, userEmail) => {
    e.preventDefault();
    alert("Edit?")
    console.log(`key: ${key}, Username: ${userName}, name: ${nameOfUser}, email: ${userEmail}, passwd: ${userPassword}`)
    setUser(addUserData)
    addUserData.userId = users[key].userId;
    axiosPutUserId();
    // let temp = {
    //   userId: key,
    //   username: userName,
    //   password: userPassword,
    //   userEmail: userEmail,
    //   nameofUser: nameOfUser
    // }
  }

  const handleDelete = (e, key) => {
    e.preventDefault();
    console.log(key)
    alert("Delete?");
    // setUser(users[key])
    axiosDeleteByUserId(users[key].userId);
  }

  const refreshPage = () => {
    setLoading(true);
    axiosGet();
  }

  // {/* <AdminNavbar /> */}

  return (

    <>
      <Navbar />
      <div className="container">


        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
              >
                <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark" onClick={refreshPage}>
                  <i class="fas fa-sync"></i>
                </button>

                <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user}'s information</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-mdb-parent="#accordionExample"
            >

              <div className="container">
                <div className="row">
                  <form style={{ width: "90vw", padding: "20px" }}>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        autoComplete="off"
                        placeholder={users.userEmail}
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Name</label>
                      <input
                        type="name"
                        className="form-control"
                        autoComplete="off"
                        placeholder={users.nameofUser}
                        id="exampleFormControlInput2"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">User Name</label>
                      <input
                        type="username"
                        className="form-control"
                        autoComplete="off"
                        placeholder={users.username}
                        id="exampleFormControlInput3"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder={users.password}
                        autoComplete="off"
                      />
                    </div>
                    {/* <div className="form-group">
                      <label for="exampleFormControlInput1">Address</label>
                      <input
                        type="address"
                        className="form-control"
                        id="exampleFormControlInput1"
                        autoComplete="off"
                      />
                    </div> */}
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Phone</label>
                      <input
                        type="name"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder={users.userMobile}
                        autoComplete="off"
                      />
                    </div>
                    {/* <button className="btn btn-success"> Save Changes </button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default User;

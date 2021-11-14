import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
import AdminNavbar from './AdminNavbar'

function Admin() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeUserId, setActiveUserId] = useState(0);
  const [activeUserName, setActiveUserName] = useState(null);

  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [nameOfUser, setNameOfUser] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userEmailId, setUserEmailId] = useState();

  const [user, setUser] = useState({});

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
    const response = await axios.get(`https://giftshop-1636920008628.azurewebsites.net/admin/sortUsersAsc`);
    // console.log("Admin")
    // console.log(response);
    setUsers(response.data);
    setLoading(false);
  }

  // POST: Add new user
  const axiosPost = async () => {
    const response = await axios.post(`https://giftshop-1636920008628.azurewebsites.net/admin/addUser`, addUserData);
    // console.log(response);
    refreshPage();
  }

  console.log("UserID", addUserData.userId)

  // PUT: update user data by userId
  const axiosPutUserId = async () => {
    const response = await axios.put(`https://giftshop-1636920008628.azurewebsites.net/admin/updateUser/${addUserData.userId}`, addUserData);
    console.log(response);
    refreshPage();
  }


  // const axiosPutByUserName = async () => {
  //   const response = await axios.put(`https://giftshop-1636920008628.azurewebsites.net/admin/updateUser/admin/updateUserByName/${updateUserData.username}`, userName);
  //   console.log(response);
  //   refreshPage();
  // }


  // DELETE: delete user by userId
  const axiosDeleteByUserId = async (key) => {
    const response = await axios.delete(`https://giftshop-1636920008628.azurewebsites.net/admin/deleteUser/${key}`);
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
      <AdminNavbar />
      <div className="container">

        <h1 style={{ textAlign: "center" }}>Users</h1>


        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
              >
                Add New User
                <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark" onClick={refreshPage}>
                  <i class="fas fa-sync"></i>
                </button>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-mdb-parent="#accordionExample"
            >
              <div class="accordion-body">
                <table class="table align-middle table-hover">
                  <thead>
                    <tr>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* Id is done automatically DONOT set it explicitly */}
                      <th scope="row">
                        <input placeholder="User ID" type="text" id="form12" class="form-control" disabled
                          onChange={e => {
                            setUserId(e.target.value)
                          }}
                        />
                      </th>
                      <td>
                        <input placeholder="User Name" type="text" id="form12" class="form-control"
                          onChange={e => {
                            setUserName(e.target.value);
                          }}
                        />
                      </td>
                      <td>
                        <input placeholder="Name" type="text" id="form12" class="form-control"
                          onChange={e => { setNameOfUser(e.target.value); }}
                        />
                      </td>
                      <td>
                        <input placeholder="Password" type="text" id="form12" class="form-control"
                          onChange={e => { setUserPassword(e.target.value); }}
                        />
                      </td>

                      <td>
                        <input placeholder="Email" type="email" id="form12" class="form-control"
                          onChange={e => { setUserEmailId(e.target.value); }}
                        />
                      </td>

                      <td>
                        <button
                          type="submit"
                          class="btn btn-success"
                          onClick={handleAdd}
                        >
                          ✔️
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        <table class="table align-middle table-hover">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>

            {!loading ? (
              users.map((data, key) => {

                const { address, complaint_list, nameofUser, order_list, password, userEmail, userId, userMobile, username } = data;

                return (
                  <>
                    <tr>
                      <td>
                        <input placeholder={userId} type="text" id="form12" class="form-control" disabled
                        />
                      </td>

                      <td>
                        <input placeholder={username} type="text" id="form12" class="form-control"
                          onChange={e => setUserName(e.target.value)}
                        />
                      </td>

                      <td>
                        <input placeholder={nameofUser} type="text" id="form12" class="form-control"
                          onChange={e => setNameOfUser(e.target.value)}
                        />
                      </td>

                      <td>
                        <input placeholder={userEmail} type="email" id="form12" class="form-control"
                          onChange={e => setUserEmailId(e.target.value)}
                        />
                      </td>

                      <td>
                        <input placeholder={password} type="text" id="form12" class="form-control"
                          onChange={e => setUserPassword(e.target.value)}
                        />
                      </td>
                      <td>
                        <div class="btn-group" role="group">
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={e => handleEdit(e, key, userName, nameOfUser, userPassword, userEmailId)}
                          >
                            ✏️
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={e => handleDelete(e, key)}
                          >
                            ❌
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <tr>
                    <th scope="row">
                      <div class="form-outline">
                        <input placeholder={userId} type="text" id="form12" class="form-control" disabled
                        />
                      </div>
                    </th>
                    <td>
                      <div class="form-outline">
                        <input placeholder={username} type="text" id="form12" class="form-control"
                          onChange={e => setUserName(e.target.value)}
                        />
                      </div>
                    </td>
                    <td>
                      <div class="form-outline">
                        <input placeholder={nameofUser} type="text" id="form12" class="form-control"
                          onChange={e => setNameOfUser(e.target.value)}
                        />
                      </div>
                    </td>
                    <td>
                      <div class="form-outline">
                        <input placeholder={userEmail} type="email" id="form12" class="form-control"
                          onChange={e => setUserEmailId(e.target.value)}
                        />
                      </div>
                    </td>
                    <td>
                      <div class="form-outline">
                        <input placeholder={password} type="text" id="form12" class="form-control"
                          onChange={e => setUserPassword(e.target.value)}
                        />
                      </div>
                    </td>


                    <td>
                      <div class="btn-group" role="group">
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={e => handleEdit(e, key, userName, nameOfUser, userPassword, userEmailId)}
                        >
                          ✏️
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={e => handleDelete(e, key)}
                        >
                          ❌
                        </button>
                      </div>
                    </td>


                  </tr> */}
                  </>
                );
              })

            ) : (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
          </tbody>
        </table>






      </div>
    </>
  );
};

export default Admin;

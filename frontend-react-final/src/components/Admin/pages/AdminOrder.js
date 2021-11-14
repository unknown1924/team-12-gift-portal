import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
import AdminNavbar from "../AdminNavbar"

function AdminOrder() {

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
        "compMessage": "New Complain"
    };

    // Fetch all user list on load
    useEffect(() => {
        axiosGet();
    }, [])

    // GET: Fetch All user list
    const axiosGet = async () => {
        const response = await axios.get(`http://localhost:8080/admin/showAllOrders`);
        // console.log("Admin")
        // console.log(response);
        setUsers(response.data);
        setLoading(false);
    }

    // POST: Add new user
    const axiosPost = async () => {
        const response = await axios.post(`http://localhost:8080/admin/addUser`, addUserData);
        // console.log(response);
        refreshPage();
    }

    console.log("UserID", addUserData.userId)

    // DELETE: delete user by userId
    const axiosDeleteByUserId = async (key) => {

        try {
            const response = await axios.delete(`http://localhost:8080/admin/deleteOrder/${key}`);
            console.log(response)
            // console.log("Delete success!")
            console.log(key)
            refreshPage();

        } catch (e) {
            console.log(e);
            alert("Unable to delete. Check your Internet")
        }
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
        // axiosPutUserId();
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
        axiosDeleteByUserId(users[key].orderId);
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

                <h1 style={{ textAlign: "center" }}>Orders</h1>





                <table class="table align-middle table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">Surprise</th>
                            <th scope="col">Total(Rs)</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {!loading ? (
                            users.map((data, key) => {

                                // const { address, complaint_list, nameofUser, order_list, password, userEmail, userId, userMobile, username } = data;
                                // const { compId, compMessage, compStatus, orderId } = data;
                                const { orderId, order_date, gift_id, order_Quant, rx_address, rx_phone, orderStatus, surprise, total_amt } = data;

                                //                     "orderId": 1,
                                // "order_date": "2021-11-13T11:23:17.547+00:00",
                                // "gift_id": 3,
                                // "order_Quant": 2,
                                // "rx_address": "Belle Vue, Chennai, India",
                                // "rx_phone": 9769852496,
                                // "orderStatus": "Dispatched",
                                // "surprise": true,
                                // "total_amt": 998.0

                                return (
                                    <>
                                        <tr>
                                            <td>
                                                {/* <input placeholder={userId} type="text" id="form12" class="form-control" disabled /> */}
                                                <input placeholder={orderId} type="text" id="form12" class="form-control" disabled />
                                            </td>

                                            <td>
                                                {/* <input placeholder={username} type="text" id="form12" class="form-control"                                            onChange={e => setUserName(e.target.value)}
                                            /> */}
                                                <input placeholder={order_date} type="text" id="form12" class="form-control" onChange={e => setUserName(e.target.value)}
                                                />
                                            </td>

                                            <td>
                                                {/* <input placeholder={username} type="text" id="form12" class="form-control"                                            onChange={e => setUserName(e.target.value)}
                                            /> */}
                                                <input placeholder={order_Quant} type="text" id="form12" class="form-control" onChange={e => setUserName(e.target.value)}
                                                />
                                            </td>

                                            <td>
                                                {/* <input placeholder={username} type="text" id="form12" class="form-control"                                            onChange={e => setUserName(e.target.value)}
                                            /> */}
                                                <input placeholder={orderStatus} type="text" id="form12" class="form-control" onChange={e => setUserName(e.target.value)}
                                                />
                                            </td>

                                            <td>
                                                {/* <input placeholder={nameofUser} type="text" id="form12" class="form-control"
                                                onChange={e => setNameOfUser(e.target.value)}
                                            /> */}
                                                <input placeholder={surprise ? "Yes" : "No"} type="text" id="form12" class="form-control"
                                                // onChange={e => setNameOfUser(e.target.value)}
                                                />
                                            </td>

                                            <td>
                                                {/* <input placeholder={username} type="text" id="form12" class="form-control"                                            onChange={e => setUserName(e.target.value)}
                                            /> */}
                                                <input placeholder={total_amt} type="text" id="form12" class="form-control" onChange={e => setUserName(e.target.value)}
                                                />
                                            </td>

                                            <td>
                                                <div class="btn-group" role="group">
                                                    {/* <button
                                                    type="button"
                                                    class="btn btn-primary"
                                                    onClick={e => handleEdit(e, key, userName, nameOfUser, userPassword, userEmailId)}
                                                >
                                                    ✏️
                                                </button> */}
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

export default AdminOrder;

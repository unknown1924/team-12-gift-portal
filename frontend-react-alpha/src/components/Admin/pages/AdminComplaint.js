import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
import AdminNavbar from "../AdminNavbar"

function AdminComplaint() {

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
        const response = await axios.get(`http://localhost:8080/admin/showAllComplaints`);
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
            const response = await axios.delete(`/admin/deleteOrder/${key}`);
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
        axiosDeleteByUserId(users[key].compId);
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

                <h1 style={{ textAlign: "center" }}>Complaints</h1>





                <table class="table align-middle table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Message</th>
                            <th scope="col">Status</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {!loading ? (
                            users.map((data, key) => {

                                // const { address, complaint_list, nameofUser, order_list, password, userEmail, userId, userMobile, username } = data;
                                const { compId, compMessage, compStatus, orderId } = data;

                                return (
                                    <>
                                        <tr>
                                            <td>
                                                {/* <input placeholder={userId} type="text" id="form12" class="form-control" disabled /> */}
                                                <input placeholder={compId} type="text" id="form12" class="form-control" disabled />
                                            </td>

                                            <td>
                                                {/* <input placeholder={username} type="text" id="form12" class="form-control"                                            onChange={e => setUserName(e.target.value)}
                                            /> */}
                                                <input placeholder={compMessage} type="text" id="form12" class="form-control" onChange={e => setUserName(e.target.value)}
                                                />
                                            </td>

                                            <td>
                                                {/* <input placeholder={nameofUser} type="text" id="form12" class="form-control"
                                                onChange={e => setNameOfUser(e.target.value)}
                                            /> */}
                                                <input placeholder={compStatus ? "Resolved" : "Pending"} type="text" id="form12" class="form-control"
                                                // onChange={e => setNameOfUser(e.target.value)}
                                                />
                                            </td>

                                            <td>
                                                {/* <input placeholder={userEmail} type="email" id="form12" class="form-control"
                                                onChange={e => setUserEmailId(e.target.value)}
                                            /> */}
                                                <input placeholder={orderId} type="email" id="form12" class="form-control"
                                                    onChange={e => setUserEmailId(e.target.value)}
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
                                                        class="btn btn-success"
                                                        onClick={e => handleDelete(e, key)}
                                                    >
                                                        ✔️
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })

                        ) : (
                            <div class="spinner-border" role="status"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        )}
                    </tbody>
                </table>






            </div>
        </>
    );
};

export default AdminComplaint;

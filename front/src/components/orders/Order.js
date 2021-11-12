import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

function Order() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    //   const [activeUserId, setActiveUserId] = useState(0);
    //   const [activeUserName, setActiveUserName] = useState(null);
    const [user, setUser] = useState();
    const userName = "Apurva";

    useEffect(() => {
        axiosGetOrderList();
    }, [])

    const axiosGetOrderList = async () => {
        const response = await axios.get(`http://localhost:8080/user/${userName}/seeOrders`);
        console.log(response);
        setOrders(response.data);
        setLoading(false);

    }

    // const axiosPost = async () => {
    //     const response = await axios.post(`http://localhost:8080/admin/addUser`, user);
    //     console.log(response);
    // }

    // const axiosPutUserId = async () => {
    //     const response = await axios.put(`http://localhost:8080/admin/updateUser/${dummyUser.userId}`, user);
    //     console.log(response);
    // }

    // const axiosPutByUserName = async () => {
    //     const response = await axios.put(`http://localhost:8080/admin/updateUser/admin/updateUserByName/${dummyUser.username}`, user);
    //     console.log(response);
    // }


    // const axiosDeleteByUserId = async () => {
    //     const response = await axios.delete(`http://localhost:8080/admin/deleteUser/${dummyUser.userId}`);
    //     console.log("Delete success!")
    //     refreshPage();
    // }



    // const handleChange = (e) => {
    //     e.preventDefault();
    //     // alert("Edit?");
    //     console.log(e.target.value)
    //     dummyUser.username = e.target.value;
    //     setUser(dummyUser);
    //     console.log(user);
    // }

    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     // alert("Edit?");
    //     console.log(user)
    //     axiosPutUserId();
    //     axiosGet();

    // }

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     alert("Delete?");
    //     axiosDeleteByUserId();
    // }


    return (

        <div className="container">

            <table class="table align-middle table-hover">
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status </th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>

                    {!loading ? (
                        orders.map((data, key) => {

                            const { orderId, order_date, order_Quant, rx_address, rx_phone, orderStatus, total_amt } = data;

                            return (
                                <>
                                    <tr>
                                        <th scope="row">
                                            <div class="form-outline">
                                                <input placeholder={orderId} type="text" id="form12" class="form-control" />
                                            </div>
                                        </th>
                                        <td>
                                            <div class="form-outline">
                                                <input placeholder={order_date} type="text" id="form12" class="form-control" />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-outline">
                                                <input placeholder={order_Quant} type="text" id="form12" class="form-control" />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-outline">
                                                <input placeholder={orderStatus} type="password" id="form12" class="form-control" />
                                            </div>
                                        </td>

                                        <td>
                                            <div class="form-outline">
                                                <input placeholder={total_amt} type="email" id="form12" class="form-control" />
                                            </div>
                                        </td>

                                        {/* <td>
                                            <div class="btn-group" role="group">
                                                <button
                                                    type="button"
                                                    class="btn btn-primary"
                                                    onClick={handleEdit}
                                                >
                                                    ✏️
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-danger"
                                                    onClick={handleDelete}
                                                >
                                                    ❌
                                                </button>
                                            </div>
                                        </td> */}


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
    );
};

export default Order;

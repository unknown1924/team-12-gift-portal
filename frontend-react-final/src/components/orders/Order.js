import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import { userContext } from "../../App";
import Navbar from "../Navbar/Navbar";

function Order() {


    const { userData, productIdData, productNameData, orderIdComplaintData } = useContext(userContext);
    const [productId, setProductId] = productIdData;
    const [productName, setProductName] = productNameData;

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    //   const [activeUserId, setActiveUserId] = useState(0);
    //   const [activeUserName, setActiveUserName] = useState(null);
    const [user, setUser] = userData;
    const [orderIdComplaint, setOrderIdComplaint] = orderIdComplaintData;
    // const userName = "b";

    useEffect(() => {
        axiosGetOrderList();
    }, [])

    const axiosGetOrderList = async () => {
        const response = await axios.get(`http://localhost:8080/user/${user}/seeOrders`);
        console.log(response);
        setOrders(response.data);
        setLoading(false);
    }
    console.log(orders)
    console.log(user)

    function handleComplaint(e, key) {
        // console.log("complaint")
        setOrderIdComplaint(orders[key].orderId);
    }

    return (

        <>
            <Navbar />
            <div className="container">

            <table class="table align-middle">
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status </th>
                        <th scope="col">Total</th>
                        <th scope="col">Complain</th>
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
                                            <div>
                                                <input placeholder={orderId} type="text" id="form12" className="form-control" />
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <input placeholder={order_date} type="text" id="form12" className="form-control" />
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input placeholder={order_Quant} type="text" id="form12" className="form-control" />
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input placeholder={orderStatus} type="text" id="form12" className="form-control" />
                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                <input placeholder={total_amt} type="email" id="form12" className="form-control" />
                                            </div>
                                        </td>

                                        <td>
                                            <Link
                                                to="/RaiseComplaint"
                                                class="btn btn-danger"
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={e => handleComplaint(e, key)}
                                            >
                                                <i class="fas fa-exclamation-triangle"></i>
                                            </Link>

                                        </td>


                                    </tr>
                                </>
                            );
                        })

                    ) : (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                </tbody>
            </table>


        </div>
        </>

        
    );
};

export default Order;

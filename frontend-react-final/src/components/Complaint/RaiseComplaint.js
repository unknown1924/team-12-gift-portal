import React, { useState, useEffect, Component, useContext } from "react";
import axios from 'axios';
import { userContext } from "../../App";
import Navbar from "../Navbar/Navbar";

function RaiseComplaint() {

  const [loading, setLoading] = useState(true);


  const { orderIdData, userData, orderIdComplaintData } = useContext(userContext);
  const [user, setUser] = userData;

  const [orderId, setOrderId] = orderIdData;
  const [orderIdComplaint, setOrderIdComplaint] = orderIdComplaintData;

  const [complaint, setComplaint] = useState(null);
  const [complaints, setComplaints] = useState([]);



  let complaintForm = {
    orderId: 1,
    complaint: "delay"
  };


  const axiosGetAllComplaint = async () => {
    const response = await axios.get(`http://localhost:8080/user/${user}/seeComplaint`);
    console.log(response);
    // setUsers(response.data);
    setComplaints(response.data)
    setLoading(false);
  }

  const axiosPostComplaint = async () => {
    const response = await axios.post(`http://localhost:8080/user/${user}/addComplaint/${orderId}`, { compMessage: complaint });
    console.log(response);
    refreshPage();
  }

  useEffect(() => {
    axiosGetAllComplaint();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderId != 0) {
      if (complaint != null) {
        axiosPostComplaint();
        alert("Success");
      } else {
        alert("Complaint field is blank")
      }
    }
    else {
      alert("You must fill the form first")
    }
  };

  const refreshPage = () => {
    setLoading(true);
    axiosGetAllComplaint();
  }

  console.log(`orderid: ${orderId} complaint: ${complaint}`)
  console.log(orderIdComplaint);

  return (
    <>
      <Navbar />
      <div id="rc">
        <div className="container" style={{ padding: "14px" }}>
          <div>{user == "test" ? (<h1>Sorry, No Active Complaints</h1>) : (
            <div>
              <h1>Add your Complaints here </h1>
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Order Id : </label>
                  <input
                    type="text"
                    class="form-control"
                    value={orderIdComplaint}
                    // placeholder={orderIdComplaint}
                    onChange={e => setOrderId(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label>Enter Complaint: </label>
                  <textarea
                    class="form-control"
                    // placeholder="Complaint"
                    onChange={e => setComplaint(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>

              </form>

              <table class="table align-middle table-hover" style={{ marginTop: "30px" }}>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Message</th>
                    <th scope="col">Status</th>
                    <th scope="col">Order ID</th>
                    {/* <th scope="col">Action</th> */}
                  </tr>
                </thead>
                <tbody>

                  {!loading ? (
                    complaints.map((data) => (

                      // const { compId, compMessage, compStatus, orderId } = data;

                      // return (

                      <>
                        <tr>
                          <th scope="row">{data.compId}</th>
                          <td>{data.compMessage}</td>
                          {/* <td>{data.compStatus ? "✔️Resolved" : "⚠️Pending"}</td> */}
                          <td>{data.compStatus ? "✔️" : "⚠️"}</td>
                          <td>{data.orderId}</td>
                          {/* <td>
                        <button type="button" class="btn btn-danger btn-sm px-3">
                          <i class="fas fa-times"></i>
                        </button>
                      </td> */}
                        </tr>

                      </>
                      // );
                    ))

                  ) : (
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    // <h4>Loading...</h4>
                  )}
                </tbody>
              </table>


            </div>

          )}</div>

        </div>
      </div>
    </>
  );
}

export default RaiseComplaint;

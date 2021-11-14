import React, { useState, useEffect, Component, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { userContext } from "../../App";
import Navbar from "../Navbar/Navbar";
/*
JUST COPY THIS INTO SENDGIFTS it should work



*/

function SendGift() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { orderIdData, userData, orderIdComplaintData } =
    useContext(userContext);
  const [user, setUser] = userData;
  ///////////////////////////
  const [order_date, setOrder_date] = useState("");
  const [gift_id, setGift_id] = useState(0);
  const [order_Quant, setOrder_Quant] = useState(1);
  const [rx_address, setRx_address] = useState("");
  const [rx_phone, setRx_phone] = useState(0);
  const [surprise, setSurprise] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const { productIdData, productNameData } = useContext(userContext);

  const [productId, setProductId] = productIdData;
  const [productName, setProductName] = productNameData;

  const onSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      order_date: order_date,
      gift_id: gift_id,
      order_Quant: order_Quant,
      rx_address: rx_address,
      rx_phone: rx_phone,
      surprise: surprise,
    };
    axios
      .post(`https://giftshop-1636920008628.azurewebsites.net/user/${user}/sendGift`, data)
      .then((res) => {
        setData(res.data);
        setOrder_date("");
        setGift_id(0);
        setOrder_Quant(0);
        setRx_address("");
        setRx_phone(0);
        setSurprise(false);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        console.log("user doesn't exist")
      });
  };

  console.log(user);

  const warningStyle = {
    color: "#870309"
  }

  return (
    <>
      <Navbar />
      <div
        id="sgift"
        style={{
          backgroundColor: "CadetBlue",
        }}
      >
        <div className="container">
          <div class="row">
            <div class="col-sm" style={{ paddingTop: "50px", paddingRight: "50px" }}>
              <aside>
                <img src="https://media.istockphoto.com/photos/hands-giving-gift-closeup-picture-id871610664?k=20&m=871610664&s=612x612&w=0&h=_c05JTnGp5ziXNKS0QbQ3bDkvbXcxQVk2JS_bM4Wckc=" />
              </aside>
            </div>
            <div class="col-sm">
              <div style={{paddingTop: "20px"}}>
                {/* <h1>Send Gift</h1> */}
                <h5>Your selected product: </h5>
                <h2 style={{color: "white"}}>{productName}</h2>
                <h5>Enter details of gift recipient.</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* <h5 className="d-inline-block mb-3">Send Gift</h5> */}
                  <div style={{ maxWidth: 350, marginBottom: "80px" }}>
                    <div classNames="form-group">
                      <label htmlFor="date">Order Date:</label>
                      <input
                        {...register("order_date", {
                          required: true,
                        })}
                        type="datetime-local"
                        className="form-control"
                        id="date"
                        value={order_date}
                        onChange={(e) => setOrder_date(e.target.value)}
                      />
                      {errors.order_date && <p style={warningStyle}>Please specify the order date!</p>}
                    </div>
                    <div classNames="form-group">
                      <label htmlFor="giftid" className="mt-2">
                        Gift ID:
                      </label>
                      <input
                        required
                        type="number"
                        className="form-control"
                        id="giftid"
                        value={productId}
                        // placeholder={}
                        onChange={(e) => setGift_id(e.target.value)}
                      />
                    </div>
                    <div classNames="form-group">
                      <label htmlFor="quant" className="mt-2">
                        Order quantity:
                      </label>
                      <input
                        {...register("order_Quant", {
                          required: true,
                        })}
                        type="number"
                        min="1"
                        max="10"
                        className="form-control"
                        id="quant"
                        value={order_Quant}
                        onChange={(e) => setOrder_Quant(e.target.value)}
                      />
                      {errors.order_Quant && <p>Please Enter the quantity</p>}
                    </div>
                    <div classNames="form-group">
                      <label htmlFor="addr" className="mt-2">
                        Address:
                      </label>
                      <input
                        {...register("rx_addr", {
                          required: true,
                        })}
                        type="text"
                        className="form-control"
                        id="addr"
                        value={rx_address}
                        onChange={(e) => setRx_address(e.target.value)}
                      />
                      {errors.rx_addr && (
                        <p style={warningStyle}>Please Enter the recipient's address</p>
                      )}
                    </div>
                    <div classNames="form-group">
                      <label htmlFor="phone" className="mt-2">
                        Recipient's phone number
                      </label>
                      <input
                        {...register("rx_phone", {
                          required: true,
                          minLength: 10,
                          maxLength: 10,
                        })}
                        type="number"
                        className="form-control"
                        id="phone"
                        value={rx_phone}
                        onChange={(e) => setRx_phone(e.target.value)}
                      />
                      {errors.rx_phone && (
                        <p style={warningStyle}>
                          Please Enter the 10 digit recipient's contact number
                        </p>
                      )}
                    </div>
                    <div classNames="form-group">
                      <label htmlFor="surprise" className="mt-2">
                        Surprise:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="surprise"
                        value={surprise}
                        onChange={(e) => setSurprise(e.target.value)}
                      />
                    </div>
                    {isError && (
                      <small className="mt-3 d-inline-block text-danger">
                        Something went wrong. Please try again later.
                      </small>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Submit"}
                      {/* Submit */}
                    </button>
//                     {data && (
//                       <div className="mt-3">
//                         <strong>Output:</strong>
//                         <br />
//                         <pre>{JSON.stringify(data, null, 2)}</pre>
//                       </div>
//                     )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendGift;

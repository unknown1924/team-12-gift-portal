import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./style.css";
import Navbar from "../Navbar/Navbar";
import { ProductCard } from "./ProductCard";


function Product() {


  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {

    const response = await axios.get(`https://giftshop-1636920008628.azurewebsites.net/admin/getGifts`);
    console.log("Products")

    setMenu(response.data);
    setLoading(false);
    console.log(menu);
  }

  const [menuData, setMenuData] = useState(menu);

  return (

    <>
    <Navbar />
      {!loading ? (
        <ProductCard menuData={menu} />
      ) : (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

    </>
  );
};

export default Product;

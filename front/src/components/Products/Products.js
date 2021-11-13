// import React, { useState } from "react";
// import "./style.css";
// import Menu from "./productApi.js";
// import { ProductCard } from "./ProductCard";
// // import Navbar from "./Navbar";
// import { useEffect } from "react";
// const uniqueList = [
//   ...new Set(
//     Menu.map((curElem) => {
//       return curElem.category;
//     })
//   ),
//   "All",
// ];

// console.log(uniqueList);

// const Product = () => {
  
//   // useEffect(() => {
//   //   axiosGet();
//   //  },[]);

//   const [menuData, setMenuData] = useState(Menu);
//   const [menuList, setMenuList] = useState(uniqueList);
//   const filterItem = (category) => {
//       if(category ==="All"){
//           setMenuData(Menu);
//           return;
//       }
//     const updatedList = Menu.filter((curElem) => {
//       return curElem.category === category;
//     });
//     setMenuData(updatedList);
//   };


//   return (
    
//     <>
//       {/* <Navbar filterItem={filterItem} menuList={menuList} /> */}
//       <ProductCard menuData={menuData} />
//     </>
//   );
// };

// export default Product;


import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./style.css";
// import Menu from "./productApi.js";

import { ProductCard } from "./ProductCard";
// import Navbar from "./Navbar";





// const uniqueList = [
//   ...new Set(
//     Menu.map((curElem) => {
//       return curElem.category;
//     })
//   ),
//   "All",
// ];

// console.log(uniqueList);

function Product() {


  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    const response = await axios.get(`http://localhost:8080/admin/getGifts`);
    console.log("Products")
    // console.log(99999999 ** 999999)

    setMenu(response.data);
    setLoading(false);
    console.log(menu);
    // setUsers(response.data);
    // setLoading(false);
  }

  const [menuData, setMenuData] = useState(menu);

  // const [menuList, setMenuList] = useState(uniqueList);
  // const filterItem = (category) => {
  //   if (category === "All") {
  //     setMenuData(Menu);
  //     return;
  //   }
  //   const updatedList = Menu.filter((curElem) => {
  //     return curElem.category === category;
  //   });
  //   setMenuData(updatedList);
  // };


  return (

    <>
      {/* <Navbar filterItem={filterItem} menuList={menuList} /> */}
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


import React, { useState } from "react";
import "./style.css";
import Menu from "./productApi.js";
import { ProductCard } from "./ProductCard";
// import Navbar from "./Navbar";
import { useEffect } from "react";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Product = () => {
  
  // useEffect(() => {
  //   axiosGet();
  //  },[]);

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
      if(category ==="All"){
          setMenuData(Menu);
          return;
      }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };


  return (
    
    <>
      {/* <Navbar filterItem={filterItem} menuList={menuList} /> */}
      <ProductCard menuData={menuData} />
    </>
  );
};

export default Product;

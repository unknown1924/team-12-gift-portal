import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { userContext } from "../../App";

export const ProductCard = ({ menuData }) => {

  const { productIdData, productNameData } = useContext(userContext);
  const [productId, setProductId] = productIdData;
  const [productName, setProductName] = productNameData;

  return (
    <>
      <section className={"main-card--cointainer"} style={{ padding: "14px" }}>
        {
          menuData.map((curElem) => {

            const { giftId, item, category, imgSource, description, price } = curElem;

            return (
              <>
                <div class="card">
                  <img
                    src={imgSource}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item}</h5>
                    <p class="card-text">
                      {description}
                    </p>
                    <p class="card-text">Price : {price} ₹</p>
                    <Link to="/SendGift" onClick={() => {
                      setProductId(giftId);
                      setProductName(item);
                    }} class="btn btn-primary">Send</Link>
                  </div>
                </div>
              </>
            );
          })
        }
      </section>
    </>
  );
};

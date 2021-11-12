import React from "react";

export const ProductCard = ({ menuData }) => {
  return (
    <>
      <section className={"main-card--cointainer"} style={{padding: "14px"}}>
        {menuData.map((curElem) => {
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
                  <a href="#!" class="btn btn-primary">
                    Order Now
                  </a>
                </div>
              </div>

              {/* <div className="container">
          <div className="row">
          <div className="card-container" key={giftId}>
            <div className="card">
              <div className="card-body">
                <span className="card-number subtle">{giftId}</span>
                <span className="card-author subtle">{item}</span>
                <h2 className="card-title"> {item} </h2>
                <span className="card-description subtle">
                  {description}
                </span>
                <span className="card-author subtle">{price}</span>
              </div>
              <img src={image} alt="images" className="card-media" />
              <span className="card-tag subtle">Order Now</span>
            </div>
          </div>

          </div>
        </div> */}
            </>
          );
        })}
      </section>
    </>
  );
};

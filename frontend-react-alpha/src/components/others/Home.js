import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";

export default function Home(props) {
  return (
    <>
      <div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.shopify.com/s/files/1/0583/3175/8777/files/4.jpg?v=1634556605"
                width="1100"
                height="500"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0583/3175/8777/files/1_bfb2c3f3-4ed5-47ad-bceb-876bc44483f3.jpg?v=1634556469"
                width="1100"
                height="500"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0583/3175/8777/files/Same_Day_Delivery_copy_1920x.jpg?v=1630497840"
                width="1100"
                height="500"
              />
            </div>
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>


        <div class="container">
        <div class="card-group">
  
         
            <div class="row">
                <div class="card col-md-4">
                    <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/15717564774-600x600.jpg?v=1635923549"/>
  
                    <div class="card-body">
                        <h5 class="card-title">Birthday Combo</h5>
                        <p class="card-text">Rs. 2,312</p>
                    </div>
                </div>
  
                <div class="card col-md-4">
                    <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/IMG_8861-600x600_360x.jpg?v=1635923587"/>
                      
                    <div class="card-body">
                        <h5 class="card-title">Chocolate Tower</h5>
                        <p class="card-text">Rs. 2,321</p>
                    </div>
                </div>
                  
                <div class="card col-md-4">
                    <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/907089664104b.jpg?v=1633941465"/>
                      
                    <div class="card-body">
                        <h5 class="card-title">Diwali Ganesha Combo</h5>
                        <p class="card-text">Rs. 1,299</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        
      </div>
    </>
  );
}

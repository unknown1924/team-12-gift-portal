import React from "react";
import './aboutus.css';

export default function AboutUs() {
  return (
    <div  id="abt" className="about">
      <div div className="container">
      
        <div class="row">
          <div class="col-md-auto">
            <aside>
              <img src="https://www.patrickranchmuseum.org/Images/giftshop/Gift-shop-sign.jpg?w=719" />
            </aside>
          </div>

          <div class="col-sm" style={{
      color:"black"
    }} >
      {/* <h3>About Us</h3> */}
            <p >
              The Gift Shop is an Indian retailer of greeting cards and gifts,
              based in New Delhi. Founded in 1979 by ABC, the company initially
              sold song books, posters and leather patches. The company's main
              product, greeting cards, was introduced in 1980
            </p>
            <p>
              The Gift Shop has about 250+ franchise and 230+ exclusive outlets,
              called Archies Galleries, spread across 120 cities and 6
              countries. It has tie-ups and licensing arrangements for
              merchandising characters such as Dennis the Menace and Disney
              characters. It has arrangements with Paramount Cards Inc., Anne
              Geddes, and American Greetings, for greeting card design and name
              use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

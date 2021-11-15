import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        {/* <div class="content">
		<div class="top">
			<div class="logo-details">
				<span class="logo_name">Gift Shop</span>
			</div>
			<div class="media-icons">
				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-instagram"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-youtube"></i></a>
			</div>
		</div>
		
	</div> */}
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
              Copyright © 2021 <a href="#">giftShop.</a>
            </span>
            <span class="policy_terms">
              <a href="#">Privacy policy</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

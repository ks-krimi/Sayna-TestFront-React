import React from "react";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="location">
        <p>
          <img src="/assets/icons/Location.svg" alt="location" />
          2600 Chadwick Rd
        </p>
        <span>Marietta,GA 30066, USA</span>
      </div>
      <div className="offer">
        <img src="/assets/icons/offer.svg" alt="offer" />
        <span>Offers</span>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "../style/card.css";
import { Globe, GalleryVertical } from "lucide-react";
const Card = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <div className="upperArea">
            <div className="heading">
              <Globe size={40} color="white" />
              <h2>Credit Card</h2>
            </div>
            <div className="barImage">
              <GalleryVertical color="white" size={40} />
            </div>
          </div>
          <div className="number">
            <h1>1234 4311 2344 2311</h1>
          </div>
          <div className="lowerArea">
            <div>Syed Syab Ahmad</div>
            <div>05/15</div>
          </div>
        </div>
      </div>
      <div className="dataEntring">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="number">Number</label>
        <input type="text" id="number" />
        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="text" id="expiryDate" />
      </div>
    </>
  );
};

export default Card;

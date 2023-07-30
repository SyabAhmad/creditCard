import React, { useState } from "react";
import "../style/card.css";
import { Globe, GalleryVertical } from "lucide-react";
const Card = () => {
  const [name, setName] = useState("Syed Syab Ahmad");
  const [number, setNumber] = useState("1234 4321 4567 7543");
  const [month, setMonth] = useState("05");
  const [year, setYear] = useState("23");
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
            <h1>{number}</h1>
          </div>
          <div className="lowerArea">
            <div>{name}</div>
            <div>
              {month}
              {"/"}
              {year}
            </div>
          </div>
        </div>
      </div>
      <div className="dataEntring">
        <label htmlFor="name">Name</label>
        <input type="text" maxLength={16} id="name" value={name} />
        <label htmlFor="number">Number</label>
        <input type="text" maxLength={10} id="number" value={number} />
        <div>
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" maxLength={2} id="expiryDate" value={month} />
          <input type="text" maxLength={2} id="expiryDate" value={year} />
        </div>
      </div>
    </>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import "../style/card.css";
import { Globe, GalleryVertical } from "lucide-react";
const Card = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [slash, setSlash] = useState("");
  const handleNameOnClick = (e) => {
    setMessage("");
    setName(e.target.value);
  };
  const handleNumberOnClick = (e) => {
    setMessage("");
    let formattedName = e.target.value;

    // Remove any existing spaces from the input
    formattedName = formattedName.replace(/\s/g, "");

    // Insert a space after every 4 characters using regular expression
    formattedName = formattedName.replace(/(.{4})/g, "$1 ");

    setNumber(formattedName);
  };
  const handleMonthOnClick = (e) => {
    setSlash("");
    let checkMonth = e.target.value;
    if (checkMonth > 12) {
      setMessage("Can not be greater then 12");
    } else {
      setMonth(e.target.value);
      setSlash("/");
      setMessage("");
    }
  };
  const handleYearOnClick = (e) => {
    setMessage("");
    setYear(e.target.value);
  };

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
              {slash}
              {year}
            </div>
          </div>
        </div>
      </div>
      <div className="dataEntring">
        <label htmlFor="number">Number</label>
        <input
          type="text"
          maxLength={20}
          id="number"
          value={number}
          onChange={handleNumberOnClick}
          placeholder="1234 1234 4567 7945"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          maxLength={16}
          id="name"
          value={name}
          onChange={handleNameOnClick}
          placeholder="Zeyad Ahmad"
        />

        <div className="datee">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            maxLength={2}
            id="expiryDate"
            value={month}
            onChange={handleMonthOnClick}
            placeholder="07"
          />
          <input
            type="text"
            maxLength={2}
            id="expiryDate"
            value={year}
            onChange={handleYearOnClick}
            placeholder="25"
          />
        </div>
        <div>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

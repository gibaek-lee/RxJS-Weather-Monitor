import React from 'react';
import './InfoBox.css';

const InfoBox = ({ zipcode, city, temp }) => {
  return (
    <div className="InfoBox">
      <p id="zipcode">({zipcode}){city}</p>
      <p id="temp">{temp}&#x2109;</p>
    </div>
  );
}

export default InfoBox

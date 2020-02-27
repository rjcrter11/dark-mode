import React, { useState } from "react";

const CoinInfo = ({ coinType }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
    console.log("button clicked");
  };

  return (
    <div className="coin-select">
      <h2>Coin Info</h2>
      <div className="coin-container">
        <h4> {coinType.id} </h4>
        <img
          className="coin-img"
          src={coinType.image && coinType.image.small}
          alt="coin"
        />
        <h5> {coinType.name} </h5>
        <h6> {coinType.symbol} </h6>
        <p className="category"> {coinType.categories} </p>
        <div className="collapse-desc">
          <p className={collapse ? "desctoggle" : "desc"}>
            {coinType.description && coinType.description.en}
          </p>
        </div>
        <button className="coin-info-button" onClick={handleCollapse}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default CoinInfo;

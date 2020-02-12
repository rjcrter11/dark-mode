import React from "react";
import DropDown from "./DropDown";

function Home() {
  return (
    <div className="home-wrapper">
      <img
        className="home-img"
        src="https://images.unsplash.com/photo-1576520804567-b88e5dade12d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=harrison-kugler-GI1oheiVl9c-unsplash.jpg"
        alt="crytocurrency"
      />
      <DropDown />
    </div>
  );
}

export default Home;

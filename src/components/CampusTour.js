import React from "react";
import "./CampusTour.css";

function CampusTour() {
  return (
    <>
      <div className="campus_tour">
        <div className="background1"></div>
        <div className="background2"></div>
        <div className="background3"></div>
        <div className="background4"></div>
        <div className="background5"></div>
        <div className="background6"></div>
        <div className="background7">
          <div className="text_area">
            <p>MODERN CAMPUS</p>
            <span>
              Our 42-acre Grenada campus is purpose-built for a safe,
              comfortable learning environment, with all of the amenities you’d
              find at home. The Advanced Learning Centre (ALC) at Ramaiah
              International Medical school complements conventional bedside
              teaching by bringing practice-based learning to the fore.
            </span>
            <div className="link_box">
              <a href="#">Take a Tour &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampusTour;

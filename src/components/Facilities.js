import React from "react";
import "./Facilities.css";
import Facilities1 from "../assets/Facilities1.png";
import Facilities2 from "../assets/Facilities2.png";
import Facilities3 from "../assets/Facilities3.png";
import Facilities4 from "../assets/Facilities4.png";

function Facilities() {
  return (
    <>
      <div className="facilities">
        <div className="background1"></div>

        <div className="background2"></div>
        <div className="box_main">
          <div className="box1">
            <img src={Facilities1} alt="" />
            <p className="title">Hospital O.P.D and IPD</p>
            <span>
              We have a well established 100 bedded hospital with 10 bedded ICU.
              We have 8 specialty OPD and 24x7 Emergency service......
            </span>
            <a className="read_more" href="#">
              READ MORE --&gt;
            </a>
          </div>
          <div className="box2">
            <img src={Facilities2} alt="" />
            <p className="title">Pharmacy</p>
            <span>
              We have 24/7 open hospital pharmacy with all the basic medicines
              along with emergency required medicines. We have both Ayurvedic
              and U.P.......
            </span>
            <a className="read_more" href="#">
              READ MORE --&gt;
            </a>
          </div>
          <div className="box3">
            <img src={Facilities3} alt="" />
            <p className="title">X-ray ECG, USG</p>
            <span>
              Our hospital is fully equipped with 24x7 X-ray, ECG and USG
              facilities......
            </span>
            <a className="read_more" href="#">
              READ MORE --&gt;
            </a>
          </div>
          <div className="box4">
            <img src={Facilities4} alt="" />
            <p className="title">Boys Hostel And Girls</p>
            <p className="pppp">Hostel</p>
            <span>
              Hostel: Well furnished hostel for boys "BOYS HOSTEL" with a
              capacity of 52 Rooms and for girls "GIRLS HOSTEL"......
            </span>
            <a className="read_more" href="#">
              READ MORE --&gt;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facilities;

import React from "react";
import "./SectionFour.css";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";

function SectionFour() {
  return (
    <>
      <div className="section_four">
        <div className="registration_container">
          <div class="container">
            <div class="title">Registration</div>
            <div class="content">
              <form action="#">
                <div class="user-details">
                  <div class="input-box">
                    <span class="details">Full Name</span>
                    <input type="text" placeholder="Enter your name" required />
                  </div>

                  <div class="input-box">
                    <span class="details">Email</span>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <span class="details">Phone Number</span>
                    <input
                      type="text"
                      placeholder="Enter your number"
                      required
                    />
                  </div>
                </div>
                <div class="gender-details">
                  <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <input type="radio" name="gender" id="dot-3" />
                  <span class="gender-title">Gender</span>
                  <div class="category">
                    <label for="dot-1">
                      <span class="dot one"></span>
                      <span class="gender">Male</span>
                    </label>
                    <label for="dot-2">
                      <span class="dot two"></span>
                      <span class="gender">Female</span>
                    </label>
                    <label for="dot-3">
                      <span class="dot three"></span>
                      <span class="gender">Prefer not to say</span>
                    </label>
                  </div>
                </div>
                <div class="button">
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="counter">
          <div className="details1">
            <img src={Icon1} className="title_icon" />
            <p className="heading1">7,290</p>
            <img src={Icon4} className="icon" />
            <p className="heading2">Students</p>
          </div>
          <div className="details2">
            <img src={Icon2} className="title_icon" />
            <p className="heading1">436</p>
            <img src={Icon4} className="icon" />
            <p className="heading2">Faculty</p>
          </div>
          <div className="details3">
            <img src={Icon3} className="title_icon" />
            <p className="heading1">519</p>
            <img src={Icon4} className="icon" />
            <p className="heading2">Staff</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFour;

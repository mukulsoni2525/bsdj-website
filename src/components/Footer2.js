import React from "react";
import "./Footer2.css";
import { MDBIcon } from "mdb-react-ui-kit";
import logo from "../assets/logo.jpeg";

function Footer2() {
  return (
    <>
      <section className="footer">
        <section className="footer_form">
          <img src={logo}></img>

          <section className="formNews">
            <div className="newsLetter">
              <div className="newsLetterContent">
                <p className="newsLetterHeading">Subscribe to our NewsLetter</p>
                <p className="newsLetterAbout">
                  Get regular updates from The <br></br> Ayurvedic Insti!
                </p>
              </div>
              <div className="formNewsLetter">
                <form action="">
                  <input
                    type="text"
                    className="inputForm1"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="inputForm2"
                    placeholder="Last Name"
                  />
                  <input
                    type="text"
                    className="inputForm3"
                    placeholder="Email"
                  />
                  <button className="inputForm4">Subscribe</button>
                </form>
              </div>
            </div>
          </section>
        </section>
        <section className="footer_main">
          <div className="left_side">
            <h5>
              SHRI BABU SINGH DADDU JI AYURVEDIC MEDICAL COLLEGE & HOSPITAL
            </h5>
            <p className="email">
              <MDBIcon far icon="envelope" className="envolope" />
              sbsdaddujiaydcollege@gmail.com
            </p>
            <p className="number">
              <MDBIcon fas icon="mobile-alt" className="phone" />
              +91 9839553056 | +91 7300864280
            </p>

            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook" className="facebook" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" className="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="youtube-square" className="youtube" />
            </a>

            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" className="instagram" />
            </a>
          </div>

          <div className="right_side">
            <section className="quickLinks">
              <h5 className="linksText">Quick Links</h5>
              <li className="links1">
                <ul>About the institute</ul>
                <ul>Ayurvedic Studies Program</ul>
                <ul>Panchakarma Treatments</ul>
                <ul>Consultations</ul>
              </li>

              <li className="links2">
                <ul>Admissions & Fees</ul>
                <ul>Yoga Teacher Training</ul>
                <ul>Careers</ul>
                <ul>Privacy policy</ul>
              </li>
            </section>

            <section className="importantLinks">
              <h5 className="impLinks">Important Links</h5>
              <li className="webLinks">
                <ul>www.ayush.gov.in</ul>
                <ul>www.ncismindia.org</ul>
                <ul>www.kanpuruniversity.org</ul>
              </li>
            </section>
          </div>
        </section>
        <div className="copyright">
          <p className="copyrightContent">
            <a href="#">
              Copyright © 2023 SBSDJ Ayurvedic Medical College & Hospital. All
              Rights Reserved. Powered By
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer2;

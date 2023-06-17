import React from 'react'
import {SiFacebook} from "react-icons/si"
import {FaInstagramSquare} from "react-icons/fa"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import './topbar.css'
import logo from '../commonAssets/logo.jpeg'
export default function Topbar() {
  return (
    <>
      <div className='topbar'>
        <img src={logo} alt='' className='logoImg'/>
        <span className='college'>
            <span className='collegeName' > SHRI BABU SINGH DADDU JI AYURVEDIC MEDICAL COLLEGE & HOSPITAL</span>
            <h4 className='collegeAddress'>Kanpur Road, Krishna Nagar Baghar - Fatehgarh, Farrukhabad Uttar Pradesh India - 209749</h4>
        </span>
        <span className='admissionButton'><button type="button" class="btn_btn-warning">Admission Button</button></span>
        <span className='socialMedia'>
            <SiFacebook className='facebook'/>
            <FaInstagramSquare className='instagram'/>
            <AiFillTwitterCircle  className='twitter'/>
            <BsLinkedin className='linkedin'/>
            <BsYoutube className="youtube"/>
        </span>
      </div>
    </>
  )
}
import React from 'react'
import './header.css'
export default function Header() {
  return (
    <>
      <nav className='arrow-up'>
        <ul className='navbar'>
          <li className='navComponents'> Home</li>
          <li className='navComponents'> 
          <div class="dropdown">
             <button className='btn'>About Us</button>
             <div class="dropdown-content">
                <a href="#">Overview</a>
                <a href="#">Vision ans mission</a>
                <a href="#">Our Leaders</a>
            </div>
          </div>
          </li>
          <li className='navComponents'>
            <div class="dropdown">
             <button className='btn'>Academics</button>
              <div class="dropdown-content">
                <a href="#">Courses</a>
                <a href="#">Departments</a>
                <a href="#">Facilities</a>
             </div>
          </div>
          </li>
          <li className='navComponents'> NCISM mandates</li>
          <li className='navComponents'>
          <div class="dropdown">
             <button className='btn'>Facility</button>
              <div class="dropdown-content">
                <a href="#">Hostels</a>
                <a href="#">Gym</a>
                <a href="#">Hospital</a>
                <a href="#">Herbal Gardens</a>
                <a href="#">Games</a>
                <a href="#">Pharmacy</a>
             </div>
          </div>
          </li>
          <li className='navComponents'> Hospital and Clinical data</li>
          <li className='navComponents'>Media</li>
          <li className='navComponents'>Contact Us</li>
          <li className='navComponents'>More</li>
        </ul>
  </nav>
    </>
  )
}
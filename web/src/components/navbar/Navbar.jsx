import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Navbar.css'

const Navbar = () => {
  const [navbar,addNavbar] = useState("Home")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>addNavbar("Home")} className={navbar==="Home"?"active":""}>Home</li>
        <li  onClick={()=>addNavbar("Menu")} className={navbar==="Menu"?"active":""}>Menu</li> 
        <li onClick={()=>addNavbar("Mobile-app")} className={navbar==="Mobile-app"?"active":""}>Mobile app</li>
        <li onClick={()=>addNavbar("Contact")} className={navbar==="Contact"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-left">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-left-basket">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className='navbar-left-button'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
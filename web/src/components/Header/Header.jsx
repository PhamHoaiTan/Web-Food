import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <section className='header-text'>
        <h3>Order your <br/> favourite food here</h3>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest<br/> ingredients and culinary expertise. Our mission it to satisfy you cravings and elevate your<br/> dining experience, one delicious meal at a time</p>
        <button className="button-view-menu">View Menu</button>
        </section>
    </div>
  )
}

export default Header
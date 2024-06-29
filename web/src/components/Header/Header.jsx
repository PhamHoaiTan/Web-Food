import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <section className='header-text'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the fines ingredients and culinary expertise. Our mission it to satisfy you cravings and elevate your experience, one delicious meal at a time</p>
        <button className="button-view-menu">View Menu</button>
        </section>
    </div>
  )
}

export default Header
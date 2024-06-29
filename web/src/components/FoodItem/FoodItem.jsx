import React from 'react'
import './FoodItem.css'
const FoodItem = ({index, id, name, description, price, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default FoodItem
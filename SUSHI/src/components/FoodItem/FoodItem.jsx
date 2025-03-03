//import React from 'react'

import './FoodItem.css'

// eslint-disable-next-line react/prop-types
const FoodItem = ({ id, name, price, description_qua, description, image }) => {

  return (
    <div className='food__item'>
      <div className="food__item-img-container">
        <img className='food__item-img' src={image} alt="" />
      </div>

      <div className="food__item-info">
        <div className="food__item-name">
          <p>{name}</p>
        </div>
        <p className='food__item-desc'>{description_qua}</p>
        <p className='food__item-desc'>{description}</p>
        <p className='fod__item-price'>{price}₽</p>
      </div>
    </div>
  );
}


export default FoodItem
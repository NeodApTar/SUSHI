//import React from 'react'
import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = (category) => {

    const { food__list } = useContext(StoreContext)

    return (
        <div className='food__display' id='food__display'>
            <h2>Лучшие блюда рядом с вами</h2>
            <div className="food__display-list">
                {food__list.map((item,index)=>{
                    return <FoodItem key={index} id={item._id} name={item.name} description_qua={item.description_qua} description={item.description} price={item.price} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
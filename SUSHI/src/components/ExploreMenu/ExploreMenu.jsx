//import React from 'react'
import './ExploreMenu.css'
import { menu__list } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore__menu' id='explore__menu'>
            <h1>Ознакомиться с меню</h1>
            <p className='explore__menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum corrupti et id voluptatibus accusantium, quis totam necessitatibus saepe vero! Esse necessitatibus iusto eveniet impedit exercitationem similique, quas modi facere!</p>
            <div className="explore__menu-list">
                {menu__list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu__name ? "All" : item.menu__name)} key={index} className='explore__menu-list-item'>
                            <img className={category===item.menu__name?"active":""} src={item.menu__image} alt="" />
                            <p>{item.menu__name} </p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
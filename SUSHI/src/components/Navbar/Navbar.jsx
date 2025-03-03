//import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'


const Navbar = () => {

    const [menu, setMenu] = useState("main")

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='navbar__logo' />
            <ul className="navbar__menu">
                <li onClick={() => setMenu("main")} className={menu === "main" ? "active" : ""}>Главная</li>
                <li onClick={() => setMenu("stocks")} className={menu === "stocks" ? "active" : ""}>Акции</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Меню</li>
                <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>О нас</li>
                <li onClick={() => setMenu("contacts")} className={menu === "contacts" ? "active" : ""}>Контакты</li>
            </ul>
            <div className="navbar__right">
                <img src={assets.search__icon} alt="" className='search__icon' />
                <div className="navbar__search__icon">
                    <img src={assets.basket__icon} alt="" className='basket__icon'/>
                    <div className="dot"></div>
                </div>
                <button>Войти</button>
            </div>
        </div>
    )
}

export default Navbar
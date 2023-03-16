import React from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass ,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate =  useNavigate()
    return (
        <div className='navbar'>
            <div className="navContainer">
                <div className="logo">
                    LOGO  </div>
                <div className="menu-search">
                    <input type="text" className='searchInput' placeholder='Search' />
                    <span className='searchBtn'>  <FontAwesomeIcon icon={faMagnifyingGlass} /></span>

                </div>
                <div className="menus">
                    <div className="auth">
                        <li>
                            Login
                        </li>
                        <li>Register</li>
                    </div>

                    <div className="others">
                        <li>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </li>
                        <li>Contact</li>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
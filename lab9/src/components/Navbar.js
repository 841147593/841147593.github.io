import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar=()=>{
    return(
        <nav className="nav-wrapper black darken-2">
            <div className="container">

                <a className="left"><NavLink to="/">Ski Lover</NavLink></a>
                
                <ul className="right">
                    <li><NavLink to="/News">News</NavLink></li>
                    <li><NavLink to="/">Ticket&Parts</NavLink></li>
                    <li><NavLink to="/">Mountain Info</NavLink></li>
                    <li><NavLink to="/">Rental Services</NavLink></li>
                    <li><NavLink to="/">CheckOut</NavLink></li>
                    <li><NavLink to="/AboutUs">About us</NavLink></li>
                    <li><NavLink to="/">Search</NavLink></li>
                    <li><NavLink to="/">Eng</NavLink></li>
                    <li><NavLink to="/MainPageFr">Fr</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
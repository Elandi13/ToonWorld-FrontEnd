import React, { useState } from "react"
import {Link} from "react-router-dom"


function Header({cartoons, onHandleSearchChange, onEraSelect}) {
    return(
        <div className = "header-container">
            <ul className = "Navbar">
                <li className = "Navbar-item item-logo" >
                    <Link to = "/home" className = "logo-home">
                        <img className = "logo-image" src = "https://media.philstar.com/photos/2020/08/19/bugs_2020-08-19_15-49-01.jpg" alt = "logo" height = "100vh" weight = "100vw" />
                    </Link> 
                </li>

                <li className = "Navbar-item item-filter">
                <label htmlFor="value"> Era:</label>
                    <select name = "era" onChange={onEraSelect} > 
                        <option value= "all" > All </option>
                        <option value= "1990s"> 1990's </option>
                        <option value="2000s" > 2000's </option>
                        <option value="2010s" > 2010's </option>
                    </select>
                </li>

                <li className = "Navbar-item item-search">
                    <input type = "text" placeholder = "Search..." onChange={onHandleSearchChange}/>
                    <button className = "search-button"> 🔍 </button>
                
                </li>

                <li className = "Navbar-item item-favorites">
                    <button> favorites</button>
                </li>

                <li>
                    <button> Form Redirect</button>
                </li>

            </ul>
        </div>
    )
}

export default Header;

///child of MainPage
/// Parent of Logo, Filter, Navbar
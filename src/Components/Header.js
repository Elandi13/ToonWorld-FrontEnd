import React, { useState } from "react"



function Header({cartoons, onHandleSearchChange}) {

    return(
        <div className = "header-container">
            <ul className = "Navbar">
                <li className = "Navbar-item item-logo" >
                    <a href = "/">
                        <img className = "logo-image" src = "https://media.philstar.com/photos/2020/08/19/bugs_2020-08-19_15-49-01.jpg" alt = "logo" height = "100vh" weight = "100vw" />
                    </a> 
                </li>

                <li className = "Navbar-item item-filter">
                <label htmlFor="value"> Era:</label>
                    <select > 
                        <option> All </option>
                        <option> 1991 - 1996 </option>
                        <option> 2000 - 2004 </option>
                        <option> 2005 - 2009 </option>
                        <option> 2010 - 2014 </option>
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
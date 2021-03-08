import React, { useState } from "react"
import {Link} from "react-router-dom"


function Header({user, cartoons, onHandleSearchChange, onEraSelect}) {
    return(
     <header>
         {/* <div>  */}
            <Link to = "/cartoons"> 
                <img className = "logo-image" src = "https://media.philstar.com/photos/2020/08/19/bugs_2020-08-19_15-49-01.jpg" alt = "logo" height = "100vh" weight = "100vw" />
            </Link> 
         {/* </div> */}
         {/* <div>  */}
             {/* {user ? (
                 <>
                 <Link to = "/home"> 
                 <img className = "logo-image" src = "https://media.philstar.com/photos/2020/08/19/bugs_2020-08-19_15-49-01.jpg" alt = "logo" height = "100vh" weight = "100vw" />
                 </Link> 
                 <Link to ="/create"> AddClip</Link> 
                 <button> Logout </button>
                 </>
             ) : (
                 <>
                <Link to="/login"> Login </Link> 
                 </>
             )} */}
             {/* <br></br> */}
             {/* <Link to ="/create"> AddClip</Link> */}

         {/* </div> */}

        <div className = "header-container">

            <ul className = "Navbar">
                
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

                
                <Link to ="/login"> Login </Link>
                <br> 
                </br>
                <Link to ="/favorites"> Favorites </Link>

                <li>
                    <Link to = "/form"> Form Redirect </Link>
                </li>
                
            </ul>
        </div>
    </header>
    )
}

export default Header;

///child of MainPage
/// Parent of Logo, Filter, Navbar
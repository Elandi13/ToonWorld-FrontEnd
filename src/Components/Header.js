import React from "react"

import {Link} from "react-router-dom"
// import styled from 'styled-components'
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./HeaderElements"




function Header({currentUser, setCurrentUser}) {

    return (
            <div class="header-container">
                 
                <Link to="/">
                    <img className = "logo-image" src ="https://cdna.artstation.com/p/assets/images/images/029/860/878/large/enrique-ramos-boquera-stillframe-toon-world0.jpg?1598875874" alt = "logo" height = "100vh" weight = "100vw" />
                </Link>
                {/* <Link className='navBarLink' to ="/form"> AddClip </Link>
                        
                        <Link className='navBarLink' to ="/favorites"> Favorites </Link>
                        
                    <Link className='navBarLink'> Logout </Link> */}
                {/* <div> */}

                    {currentUser ? (
                        <div> 
                        <div class="nav-option" id="add-clip-link">
                            <Link className='nav-link' to ="/form"> Add a Clip </Link>
                        </div>
                        
                        <div class="nav-option" id="favorite-link">
                            <Link className='nav-link' to ="/favorites"> Favorites </Link>
                        </div>

                        <div class="nav-option" id="logout-link">
                            <Link className='nav-link' to="/" onClick={()=> setCurrentUser(null)}> Logout </Link>
                        </div>
                            </div>
                         ) : ( 
                             <div> 
                        <div class="nav-option" id="favorite-link">
                            <Link className='nav-link' to="/login"> Login </Link>
                        </div>
                             </div> 
                     )} 
                
            </div>
    )  
}

       

export default Header;


import React from "react"

import {Link} from "react-router-dom"
// import styled from 'styled-components'
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./HeaderElements"




function Header({currentUser, setCurrentUser}) {

    return (
            <div class="header-container">
                 
                <Link to="/">
                    <img className = "logo-image" src = "https://static.wikia.nocookie.net/yugioh/images/d/d8/ToonWorld-GX02-JP-VG.png/revision/latest/scale-to-width-down/340?cb=20101206081549" alt = "logo" height = "100vh" weight = "100vw" />
                </Link>
                {/* <Link className='navBarLink' to ="/form"> AddClip </Link>
                        
                        <Link className='navBarLink' to ="/favorites"> Favorites </Link>
                        
                    <Link className='navBarLink'> Logout </Link> */}
                {/* <div> */}

                    {currentUser ? (
                        <> 
                        <Link className='nav-link' to ="/form"> AddClip </Link>
                        
                        <Link className='nav-link' to ="/favorites"> Favorites </Link>

                        <Link className='nav-link' onClick={()=> setCurrentUser(null)}> Logout </Link>
                            </>
                         ) : ( 
                             <> 
                        <Link className='nav-link' to="/login"> Login </Link>
                             </> 
                     )} 
                
            </div>
    )  
}

       

export default Header;


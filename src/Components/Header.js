import React from "react"

// import {Link} from "react-router-dom"
// import styled from 'styled-components'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./HeaderElements"




function Header({user}) {
//     const HeaderLayout = styled.div`
//         padding: 1.0rem;
//         display: flex;
//         grid-template-columns: auto 100px 100px 100px;
//         background-color: #7542f5;
//         color: white;
//         justify-content: space-between;
//         z-index: 10;
//     `
//     const Logo = styled.div`
//     `

//     const ControlButton = styled.div`
//         place-content: center;
//         padding: 25px;
//     `

//     const StyledLink = styled(Link)`
//         font-size: 2rem;
//         margin: 10px;
//         color: white;
//     `
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1> Toon Worldy </h1>
                    {/* <img className = "logo-image" src = "https://media.philstar.com/photos/2020/08/19/bugs_2020-08-19_15-49-01.jpg" alt = "logo" height = "100vh" weight = "100vw" /> */}
                </NavLink>
                <Bars />
                <NavMenu>
                    {user ? (
                            <>
                        <NavLink className='navBarLink' to ="/form"> AddClip </NavLink>
                        
                        <NavLink className='navBarLink' to ="/favorites"> Favorites </NavLink>

                        <NavLink className='navBarLink'> Logout </NavLink>
                            </>
                    ) : (
                            <>
                        <NavLink className='navBarLink' to="/login"> Login </NavLink>
                            </>
                    )}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/route"> Sign In </NavBtnLink>
                </NavBtn>
            </Nav>
        </>

        // Below was Cam's original styled component
        // <HeaderLayout>
        //     <Logo>  
        //         <NavLink to = "/"> 
        //             <img className = "logo-image" src = "https://media.philstar.com/photos/2020/08/19/bugs_2020-08-19_15-49-01.jpg" alt = "logo" height = "100vh" weight = "100vw" />
        //         </StyledLink> 
        //     </Logo> 
        //         {user ? (
        //                 <>
        //             <NavLink className='navBarLink'>  <StyledLink to ="/form"> AddClip</StyledLink>  </NavLink>
                    
        //             <NavLink className='navBarLink'> <StyledLink to ="/favorites"> Favorites </StyledLink> </NavLink>

        //             <NavLink className='navBarLink'> <StyledLink> Logout </StyledLink> </NavLink>
        //                 </>
        //         ) : (
        //                 <>
        //             <NavLink className='navBarLink'><StyledLink to="/login"> Login </StyledLink> </NavLink>
        //                 </>
        //         )} 
        // </HeaderLayout>
    )   // Above was the original styled component
}

        {/* <div className = "header-container">
            <ul className = "Navbar">
                
                <Link to ="/login"> Login </Link>
                <br> 
                </br>
                <Link to ="/favorites"> Favorites </Link>

                <br>
                </br>
                    <Link to = "/form"> Upload Clip </Link>
                
            </ul>
        </div> */}

export default Header;

///child of MainPage
/// Parent of Logo, Filter, Navbar

///Might need to move
{/* <li className = "Navbar-item item-filter">
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

</li> */}
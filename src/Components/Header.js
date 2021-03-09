import React from "react"
import {Link} from "react-router-dom"
import styled from 'styled-components'


function Header({user}) {
    const HeaderLayout = styled.div`
    padding: 25px;
    display: grid;
    grid-template-columns: auto 100px 100px 100px;
    background-color: #7542f5;
    color: white;
    
    `
    const Logo = styled.div`
    `

    const ControlButton = styled.div`
        place-content: center;
        padding: 25px;
    `

    const StyledLink = styled(Link)`
        font-size: 2rem;
    `
    return(
        <HeaderLayout>
            <Logo>  
                <StyledLink to = "/"> 
                    <img className = "logo-image" src = "https://media.philstar.com/photos/2020/08/19/bugs_2020-08-19_15-49-01.jpg" alt = "logo" height = "100vh" weight = "100vw" />
                </StyledLink> 
            </Logo> 
                {user ? (
                        <>
                    <ControlButton>  <StyledLink to ="/form"> AddClip</StyledLink>  </ControlButton>
                    
                    <ControlButton> <StyledLink to ="/favorites"> Favorites </StyledLink> </ControlButton>

                    <ControlButton> <button> Logout </button> </ControlButton>
                        </>
                ) : (
                        <>
                    <ControlButton><Link to="/login"> Login </Link> </ControlButton>
                        </>
                )} 
        </HeaderLayout>
    )
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
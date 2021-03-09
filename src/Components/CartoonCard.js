import userEvent from "@testing-library/user-event"
import React from "react"
// import { Card } from "semantic-ui-react";
import {NavLink} from "react-router-dom"
import NewForm from "./NewForm"
// import CartoonDetailPage from "./CartoonDetailPage"


function CartoonCard({cartoonInfo, handleDeleteCartoon, onAddFavorite, favorites}) {
    const{id, tv_show, title, year, episode, description, clip, image, era} = cartoonInfo
    // console.log(id)


function handleClipDelete(){
    // console.log(id)
    fetch(`http://localhost:3000/cartoons/${id}`,{
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(handleDeleteCartoon(id))
}

function handleFavClick(e){
    e.preventDefault()
    // console.log(id)
    fetch('http://localhost:3000/user_cartoons', 
    {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
                },
        body: JSON.stringify({cartoon_id:id, user_id: 1 }),
            })
        .then(response => response.json())
        .then(onAddFavorite) 
}
    
    return(
         <div className="cartoon_card" height="100vh" width="100vh"> 
             <ul> 
                <NavLink to= {`/cartoons/${id}`} >
                     <img src={image} alt ="cartoon-image" height = "100%" width = "100%"/>
                 </NavLink>
                      <h2> {tv_show} </h2>
              <button className="delete-button" onClick={handleClipDelete} >🗑</button>
              <button  className ="like-button" onClick={handleFavClick} > ❤️ </button>
                        
             </ul>
          </div>
             
        
        // <CartoonCardPage {car}/>
    )
}

export default CartoonCard;

///child of CartoonContainer


///use this for cartoon show page
/* <iframe position="absolute" width="100%" height="100%" src={clip}>
</iframe> */
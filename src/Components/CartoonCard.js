import React from "react"
// import { Card } from "semantic-ui-react";
import {Link} from "react-router-dom"
// import CartoonDetailPage from "./CartoonDetailPage"


function CartoonCard({cartoonInfo, handleDeleteCartoon, onAddFavorite}) {
    const{id, tv_show, title, year, episode, description, clip, image, era} = cartoonInfo
    console.log(id)


function handleClipDelete(){
    // console.log(id)
    fetch(`http://localhost:3000/cartoons/${id}`,{
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(handleDeleteCartoon(id))
}

function handleFavClick(){
    fetch('http://localhost:3000/user_cartoons', 
    {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
                },
        body: JSON.stringify(newFav),
            })
        .then(response => response.json())
        .then(onAddFavorite) 
}
    
    return(
        <ul>
            <div className="cartoon_card" height="100vh" width="100vh"> 
                    <Link to= {`/cartoons/${id}`} >
                        <img src={image} alt ="cartoon-image" height = "100%" width = "100%" 
                    />
                    </Link>
                    <button className="delete-button" onClick={handleClipDelete} >🗑</button>
                    <button  className ="like-button" onClick={handleFavClick}> ❤️ </button>
            </div>
        </ul>
        // <CartoonCardPage {car}/>
    )
}

export default CartoonCard;

///child of CartoonContainer


///use this for cartoon show page
/* <iframe position="absolute" width="100%" height="100%" src={clip}>
</iframe> */
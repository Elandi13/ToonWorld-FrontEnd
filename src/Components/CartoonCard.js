// import userEvent from "@testing-library/user-event"
import React from "react"
import { Card, Image } from "semantic-ui-react";
import {Link} from "react-router-dom"


// import CartoonDetailPage from "./CartoonDetailPage"


function CartoonCard({cartoonInfo, onAddFavorite}) {
    const{id, tv_show, image} = cartoonInfo
    // console.log(id)


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
        <div class="cartoon-card">
            
                <Link to= {`/cartoons/${id}`} >
                    <img id={id} src={image} alt={tv_show} class="card-image"/>
                </Link>
                <div class="card-content">
                    <h2> {tv_show} </h2>
                    <button  className ="like-button" onClick={handleFavClick} > ❤️ </button>      
                </div> 
        </div>
    )
}

export default CartoonCard;


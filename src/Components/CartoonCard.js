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
        <Card centered="true" fluid="true" >
            
                <Link to= {`/cartoons/${id}`} >
                    <img id={id} src={image} />
                </Link>
                <Card.Content textAlign="center">
                    <h2> {tv_show} </h2>
                </Card.Content>
                
                <button  className ="like-button" onClick={handleFavClick} > ❤️ </button>       
        </Card>
    )
}

export default CartoonCard;


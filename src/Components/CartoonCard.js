import React from "react"
import {Link} from "react-router-dom"




function CartoonCard({cartoonInfo, onAddFavorite}) {
    const{id, tv_show, image} = cartoonInfo
 


    function handleFavClick(e){
        e.preventDefault()
    
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
                    <h2 class="card-content"> {tv_show} </h2>
                    <button  class="like-button" onClick={handleFavClick} > ❤️ </button>      
                </div> 
        </div>
    )
}

export default CartoonCard;


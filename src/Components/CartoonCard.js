import React from "react"
// import { Card } from "semantic-ui-react";

function CartoonCard({cartoonInfo, handleDeleteCartoon}) {
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
    
    return(
        <ul>
            <div className="cartoon_card" height="100vh" width="100vh"> 
                    <Link to="details">
                        <img src={image} alt ="cartoon-image" height = "100%" width = "100%" />
                    </Link>
                    <button className="delete-button" onClick={handleClipDelete} >🗑</button>
                    <button  className ="like-button" > ❤️ </button>
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
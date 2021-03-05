import React from "react"
import CartoonCard from "./CartoonCard"
import { Card } from "semantic-ui-react";

function CartoonContainer({cartoons}) {
    const cartoonList = cartoons.map((cartoon)=>{
        return <CartoonCard 
        key={cartoon.id} 
        cartoonInfo={cartoon}/>
    })
    return(
        <Card.Group itemsPerRow={3}>
            {cartoonList}
        </Card.Group>
    )
}

export default CartoonContainer;

///child of MainPage
/// parent of CartoonCard
import React from "react"
import CartoonCard from "./CartoonCard"
import { Card } from "semantic-ui-react";

function CartoonContainer({filteredCartoons, oldCartoonList, handleDeleteCartoon}) {
    const cartoonList = filteredCartoons.map((cartoon)=>{
        return <CartoonCard 
        key={cartoon.id} 
        cartoonInfo={cartoon}
        oldCartoonList= {oldCartoonList}
        handleDeleteCartoon={handleDeleteCartoon}
        />
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
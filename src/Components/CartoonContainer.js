import React from "react"
import CartoonCard from "./CartoonCard"

function CartoonContainer({cartoons}) {
    const cartoonList = cartoons.map((cartoon)=>{
        return <CartoonCard 
        key={cartoon.id} 
        cartoonInfo={cartoon}/>
    })
    return(
        <ul> 
            {cartoonList}
        </ul>
    )
}

export default CartoonContainer;

///child of MainPage
/// parent of CartoonCard
import React from "react"
import CartoonCard from "./CartoonCard"

function CartoonContainer({filteredCartoons, onAddFavorite, favorites}) {
    const cartoonList = filteredCartoons.map((cartoon)=>{
        return (
                <CartoonCard 
                    key={cartoon.id} 
                    cartoonInfo={cartoon}
                    onAddFavorite={onAddFavorite}
                    favorites={favorites}
                />
        )
    })

    return(
        <div class="cartoon-container">
            {cartoonList}
        </div>
    )
}

export default CartoonContainer;


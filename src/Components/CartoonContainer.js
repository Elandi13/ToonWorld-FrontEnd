import React from "react"
import CartoonCard from "./CartoonCard"
import { Card } from "semantic-ui-react";

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
        <Card.Group itemsPerRow={3} centered="true">
            {cartoonList}
        </Card.Group>
    )
}

export default CartoonContainer;

///child of MainPage
/// parent of CartoonCard

//let filteredGames = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
// if (filter !== "all") {
//     filteredGames = filteredGames.filter(game => game.genre === filter)
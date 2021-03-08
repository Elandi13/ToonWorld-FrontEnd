import React from "react"
import CartoonCard from "./CartoonCard"
import { Card } from "semantic-ui-react";

function CartoonContainer({filteredCartoons, handleDeleteCartoon, onAddFavorite}) {
    const cartoonList = filteredCartoons.map((cartoon)=>{
        return <CartoonCard 
            key={cartoon.id} 
            cartoonInfo={cartoon}
            handleDeleteCartoon={handleDeleteCartoon}
            onAddFavorite={onAddFavorite}
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

//let filteredGames = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
// if (filter !== "all") {
//     filteredGames = filteredGames.filter(game => game.genre === filter)
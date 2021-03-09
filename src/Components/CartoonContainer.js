import React from "react"
import CartoonCard from "./CartoonCard"
import { Card } from "semantic-ui-react";

function CartoonContainer({filteredCartoons, onAddFavorite, favorites}) {
    const cartoonList = filteredCartoons.map((cartoon)=>{
        return (
            <Card>
                <CartoonCard 
                    key={cartoon.id} 
                    cartoonInfo={cartoon}
                    onAddFavorite={onAddFavorite}
                    favorites={favorites}
                />
            </Card>    
                
        )
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
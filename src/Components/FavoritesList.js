import React from "react"
import FavoriteCard from "./FavoriteCard"

function FavoritesList({favorites}){

    const allFavorites = favorites.map((fav) => {
        return <FavoriteCard key={fav.id} fav={fav} />
    })
    return (
        <div>
            <h4>
                {allFavorites}
            </h4>
        </div>
    )
}

export default FavoritesList;
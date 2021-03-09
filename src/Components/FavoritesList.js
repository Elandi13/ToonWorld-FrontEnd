import React from "react"
import FavoriteCard from "./FavoriteCard"

function FavoritesList({favorites, setFavorites}){

    
    const allFavorites = favorites.map((fav) => {
        return <FavoriteCard key={fav.id} fav={fav} favDeleteRequest={favDeleteRequest} />
    })

    function handleDeleteFav(id){
        const updatedFavs = favorites.filter(user_cartoon => user_cartoon.id !== id)
        setFavorites(updatedFavs)
    }

    function favDeleteRequest(id){
        fetch(`http://localhost:3000/user_cartoons/${id}`,{
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(handleDeleteFav(id))
    }


    return (
        <div>
            <h4>
                {allFavorites}
            </h4>
        </div>
    )
}

export default FavoritesList;
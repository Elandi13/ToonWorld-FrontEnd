import React from "react"


function FavoriteCard({fav, favDeleteRequest}){
  const {id} = fav

  function removeCartoon(){
    favDeleteRequest(id)
  }

  return (
    <div class="favorite-container"> 
        <div class="favorite-card">
          <h1 class="fav-title">
            {fav.cartoon.title} 
          </h1>

          <iframe title={fav.cartoon.title} width="650" height="315" src={fav.cartoon.clip} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
          <h3>
            Episode: {fav.cartoon.episode} 
          </h3>
          <h2>
            Original Date Aired: {fav.cartoon.year}
          </h2>
          <button className="delete-button" onClick={removeCartoon} >🗑</button>
          <h4 class="fav-description">
            {fav.cartoon.description} 
          </h4>
        </div>
    </div>
  )
}



export default FavoriteCard;
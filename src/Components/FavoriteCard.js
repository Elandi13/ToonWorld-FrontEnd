import React from "react"


function FavoriteCard({fav}){
    // console.log(fav.cartoon.title)
    return (
      <div> 
        <div> 
            <h1> Welcome To Your Personal Favs</h1>
        <h1>
            Episode: {fav.cartoon.episode} - {fav.cartoon.title} 
        </h1>
      
          <iframe width="650" height="315" src={fav.cartoon.clip} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
    
       <ul> 
           <h2>
              Original Date Aired: {fav.cartoon.year}
              <button className="delete-button" >🗑</button>
           </h2>

          <br></br>

            {fav.cartoon.description} 
      </ul>

        </div>

  </div>
    )
}



export default FavoriteCard;
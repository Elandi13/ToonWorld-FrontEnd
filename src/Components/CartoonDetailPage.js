import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

function CartoonDetailPage(){
    const [cartoon, setCartoon] = useState([])
    const params = useParams()
    console.log(params)
    const id = params.id
    

    console.log(params.id)
    useEffect(() => {
        fetch(`http://localhost:3000/cartoons/${id}`)
        .then(response => response.json())
        .then((cartoonData)=> {
            setCartoon(cartoonData)
        })
        
    },[id])

    const imageBackground = cartoon.background

    return (
        <div style={{ 
            backgroundImage: `url(${imageBackground})` 
          }}>
            <div class="detail-box"> 
                <div class="detail-header">
                    <h1 class="detail-title">
                        {cartoon.title} 
                    </h1>
                </div>
                
                <div class="detail-clip">
                    <iframe class="clip" title={cartoon.title} width="650" height="315" src={cartoon.clip} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                
                <div class="episode-box">
                    <h3 class="detail-episode">
                        Episode: {cartoon.episode} 
                    </h3>
                </div>

                <div class="aired-box">
                    <h2 class="detail-date-aired">
                        Original Date Aired: {cartoon.year}
                    </h2>
                </div>

                <div class="detail-description">
                    {cartoon.description} 
                </div>
            </div>
        </div>
    )
}

export default CartoonDetailPage
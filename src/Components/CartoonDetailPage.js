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

    const imageBackground = cartoon.image

    return (
        <div style={{ 
            backgroundImage: `url(${imageBackground})` 
          }}>
            <div class="detail-box"> 
                <div class="detail-header">
                    <h1 class="detail-title">
                        Episode: {cartoon.episode} - {cartoon.title} 
                    </h1>
                </div>
                
                <div class="detail-clip">
                    <iframe title={cartoon.title} width="650" height="315" src={cartoon.clip} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                
                
                <h2 class="detail-date-aired">
                    Original Date Aired: {cartoon.year}
                </h2>

                <div class="detail-description">
                    {cartoon.description} 
                </div>
            </div>
        </div>
    )
}

export default CartoonDetailPage
import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

function CartoonDetailPage(){
    const [cartoon, setCartoon] = useState([])
    const params = useParams()
    const id = params.id
    

    console.log(params.id)
    useEffect(() => {
        fetch(`http://localhost:3000/cartoons/${id}`)
        .then(response => response.json())
        .then((cartoonData)=> {
            setCartoon(cartoonData)
            // console.log(cartoonData)
        })
        
    },[id])

    // console.log(id)
    // console.log(cartoon)
    return (
        <div> 
            <h1>
                Episode: {cartoon.episode} - {cartoon.title} 
            </h1>
            
            <iframe width="650" height="315" src={cartoon.clip} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
             <ul> 
                 <h2>
                    Original Date Aired: {cartoon.year}
                 </h2>

                <br></br>

             {cartoon.description} 
            </ul>


        </div>
    )
}

export default CartoonDetailPage
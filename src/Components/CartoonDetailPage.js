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
    console.log(cartoon)
    return (
        <div>
            {cartoon.title}
        </div>
    )
}

















export default CartoonDetailPage
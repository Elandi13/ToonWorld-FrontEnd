import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

function details(){
    const [cartoon, setCartoon] = useState(null)
    const params = useParams()
    const id = params.id

    useEffect(() => {
        fetch(`http://localhost:3000/cartoons/${id}`)
        .then(response => response.json())
        .then((cartoon)=> {
            console.log(cartoon)
        })

    },[])



    return (
        <div>
            {cartoon.tv_show}
        </div>
    )
}

















export default details
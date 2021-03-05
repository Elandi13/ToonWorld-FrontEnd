import React, {useEffect, useState} from "react"
import Header from "./Header"
import NewForm from "./NewForm"
import CartoonContainer from "./CartoonContainer"


function MainPage() {

    const [search, setSearch] = useState("")
    const [cartoons, setCartoons] = useState([])
    
    useEffect(()=> {
        fetch(`http://localhost:3000/cartoons`)
        .then(response => response.json())
        .then((cartoonArray) => setCartoons(cartoonArray))
    }, [])

    function handleSearchChange(event){
        setSearch(event.target.value)
    }
    
    const filteredCartoons = cartoons.filter((cartoon) => {
        return cartoon.description.includes(search)
    })

    function addCartoon(newCartoon){
        const updatedCartoons = [...cartoons, newCartoon]
        setCartoons(updatedCartoons)
    }


    return(
        <div>
        <h2>
            MainPage
            <Header cartoons={filteredCartoons} onHandleSearchChange={handleSearchChange}/> 
            <NewForm onAddCartoon ={addCartoon}/>
            <CartoonContainer cartoons ={filteredCartoons}/> 
        </h2>
        </div>
    )
}

export default MainPage;

///parent of header and newForm
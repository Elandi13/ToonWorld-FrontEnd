import React, {useEffect, useState} from "react"
import Header from "./Header"
import NewForm from "./NewForm"
import CartoonContainer from "./CartoonContainer"
// import { Route, Switch } from "react-router";


function MainPage() {
    
    const [search, setSearch] = useState("")
    const [cartoons, setCartoons] = useState([])
    const [eraSelect, setEraSelect] = useState("all")
    
    useEffect(()=> {
        fetch(`http://localhost:3000/cartoons`)
        .then(response => response.json())
        .then((cartoonArray) => setCartoons(cartoonArray))
    }, [])

    function handleSearchChange(event){
        setSearch(event.target.value)
    }

    const filteredEra = cartoons.filter((cartoon) => {
        return cartoon.era === eraSelect
        // if (eraSelect === "all") {
        //     return cartoon.era === eraSelect
        // } else if (eraSelect === "1990s"){
        //     return cartoon.era ===eraSelect
        // }

    })
    
    const filteredCartoons = filteredEra.filter((cartoon) => {
        return cartoon.description.includes(search)
    })

    function addCartoon(newCartoon){
        const updatedCartoons = [...cartoons, newCartoon]
        setCartoons(updatedCartoons)
    }
    
    function handleEraSelect(event){
        setEraSelect(event.target.value) 
        // console.log(cartoons)
    }

    function handleDeleteCartoon(id){
        const updatedClips = cartoons.filter(cartoon => cartoon.id !== id)
        setCartoons(updatedClips)
    }
    

    return(
        <div>
            <h2>
            MainPage
            <Header cartoons={filteredCartoons} onHandleSearchChange={handleSearchChange} onEraSelect ={handleEraSelect}/>
                {/* <Switch>
                     <Route path = "/create">  */}
                         <NewForm onAddCartoon ={addCartoon}/>
                     {/* </Route>
                </Switch> */}
            <CartoonContainer filteredCartoons ={filteredCartoons} oldCartoonList={cartoons} handleDeleteCartoon={handleDeleteCartoon}/> 
            </h2>
        </div>
    )
}

export default MainPage;

///parent of header and newForm
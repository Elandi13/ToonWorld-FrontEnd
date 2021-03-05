import React, {useState} from "react"
import Header from "./Header"
import NewForm from "./NewForm"
import CartoonContainer from "./CartoonContainer"
import cartoons from "../data"

function MainPage() {

    const [search, setSearch] = useState("")

    function handleSearchChange(event){
        setSearch(event.target.value)
    }
    
    const filteredCartoons = cartoons.filter((cartoon) => {
        return cartoon.description.includes(search)
    })

    return(
        <div>
        <h2>
            MainPage
            <Header cartoons={filteredCartoons} onHandleSearchChange={handleSearchChange}/> 
            <NewForm />
            <CartoonContainer cartoons ={filteredCartoons}/> 
        </h2>
        </div>
    )
}

export default MainPage;

///parent of header and newForm
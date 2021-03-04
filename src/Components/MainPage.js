import React from "react"
import Header from "./Header"
import NewForm from "./NewForm"
import CartoonContainer from "./CartoonContainer"
import cartoons from "../data"

function MainPage() {
    return(
        <div>
        <h2>
            MainPage
            <Header/> 
            < NewForm />
            <CartoonContainer cartoons ={cartoons}/> 
        </h2>
        </div>
    )
}

export default MainPage;

///parent of header and newForm
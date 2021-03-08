import React, {useEffect, useState} from "react"
import { Route, Switch } from "react-router";
// import Login from "./Login"
import CartoonContainer from "./CartoonContainer"
import Header from "./Header"
import NewForm from "./NewForm"


function App() {
  const [user, setUser] = useState(null)
  const [cartoons, setCartoons] = useState([])
  const [search, setSearch] = useState("")
  const [eraSelect, setEraSelect] = useState("all")


  useEffect(()=> {
    fetch(`http://localhost:3000/cartoons`)
    .then(response => response.json())
    .then((cartoonArray) => setCartoons(cartoonArray))
}, [])

function handleSearchChange(event){
  setSearch(event.target.value)
}


// const filteredEra = cartoons.filter((cartoon) => {
  // return cartoon.era === eraSelect
  // if (eraSelect === "all") {
  //     return cartoon.era === eraSelect
  // } else if (eraSelect === "1990s"){
  //     return cartoon.era ===eraSelect
  // }
// })


const filteredCartoons = cartoons.filter((cartoon) => {
  return cartoon.description.includes(search)
})


function handleEraSelect(event){
  setEraSelect(event.target.value) 
  // console.log(cartoons)
}


function handleDeleteCartoon(id){
  const updatedClips = cartoons.filter(cartoon => cartoon.id !== id)
  setCartoons(updatedClips)
}

function addCartoon(newCartoon){
  const updatedCartoons = [...cartoons, newCartoon]
  setCartoons(updatedCartoons)
}


  // console.log(user)
  return (
    <div>
      <Header 
      user ={user} 
      cartoons={filteredCartoons} 
      onHandleSearchChange={handleSearchChange} 
      onEraSelect ={handleEraSelect} />
      <Switch>

        <Route path="/cartoons">
          <CartoonContainer 
          filteredCartoons ={filteredCartoons} 
          oldCartoonList={cartoons} 
          handleDeleteCartoon={handleDeleteCartoon}/> 
          {/* <Login setUser={setUser}/> */}
        </Route>

        <Route path = "/new_cartoon">
          <NewForm 
          onAddCartoon ={addCartoon}/> 
        </Route>

      </Switch>

    </div>
   );
 }
export default App;
      
// app 
//Navbar / cartoonContainer  
//Login 
//CartoonContainer but with login features such as create/fav 
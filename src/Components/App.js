import React, {useEffect, useState} from "react"
import { Route, Switch } from "react-router";
import Login from "./Login"
import CartoonContainer from "./CartoonContainer"
import Header from "./Header"
import NewForm from "./NewForm"
import Filter from "./Filter"
import CartoonDetailPage from "./CartoonDetailPage"
import FavoritesList from "./FavoritesList"
// import userEvent from "@testing-library/user-event";
import {useHistory} from "react-router-dom"


function App() {
  const [user, setUser] = useState(null)
  const [cartoons, setCartoons] = useState([])
  const [search, setSearch] = useState("")
  const [eraSelect, setEraSelect] = useState("all")
  const [favorites, setFavorites] = useState([])
  // const [favCartoons, setFavCartoons] = useState([])
  const history = useHistory()

// console.log(user)

  useEffect(()=>{
    const token = true
    if(token){
      fetch(`http://localhost:3000/me`)
      .then((response) => response.json())
      .then(userData => {
        console.log(userData)
        // setUser(userData)
      })
    }
  },[])



  useEffect(()=> {
    fetch(`http://localhost:3000/cartoons`)
    .then(response => response.json())
    .then((cartoonArray) => setCartoons(cartoonArray))
  }, [])


  useEffect(()=> {
    fetch(`http://localhost:3000/user_cartoons`)
    .then(response => response.json())
    .then((favArr) => setFavorites(favArr))
  }, [])

// function handleSearchChange(event){
//   console.log(event.target.value)
//   setSearch(event.target.value)
// }


  const filteredEra = cartoons.filter((cartoon) => {
    if (eraSelect === "all") {
      return cartoons
    } else if (eraSelect === "1990s") {
      return cartoon.era === "1990s"
    } else if (eraSelect === "2000s") {
      return cartoon.era === "2000s"
    } else if (eraSelect === "2010s") {
      return cartoon.era === "2010s"
    }
  });


  const filteredCartoons = filteredEra.filter((cartoon) => {
    return cartoon.description.includes(search)
  })


  function handleEraSelect(event){
    setEraSelect(event.target.value) 
    // console.log(cartoons)
  }


  function addCartoon(newCartoon){
    setCartoons([...cartoons, newCartoon])
  }

  function addFavorite(newFav){
    // console.log(newFav)
    setFavorites([...favorites, newFav])
    history.push("/favorites")
  }

  function handleSearchChange(event){
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  // console.log(user)
  return (
    <div>

      <Header 
        user ={user} 
      // cartoons={filteredCartoons} 
      />

  
      <Filter 
        search={search}
        onSearch={handleSearchChange}
        onEraSelect={handleEraSelect}
        cartoons={filteredCartoons}
      />
      

      <Switch>
        <Route exact path="/">
          <CartoonContainer 
            filteredCartoons ={filteredCartoons} 
            oldCartoonList={cartoons} 
            favorites={favorites}
            onAddFavorite={addFavorite}
          /> 
        </Route>

    

        <Route path = "/form">
          <NewForm 
          onAddCartoon ={addCartoon}/> 
        </Route>

        <Route path ="/login"> 
          <Login setUser ={setUser}/>
        </Route>

        <Route path ="/cartoons/:id" >
          <CartoonDetailPage />
        </Route>

        <Route path ="/favorites" >
          <FavoritesList favorites={favorites} setFavorites={setFavorites}/>
        </Route>

      </Switch>

    </div>
   );
 }
export default App;
      

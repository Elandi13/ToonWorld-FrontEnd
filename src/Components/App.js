import React, {useEffect, useState} from "react"
import { Route, Switch } from "react-router";
import Login from "./Login"
import CartoonContainer from "./CartoonContainer"
import Header from "./Header"
import NewForm from "./NewForm"
import Filter from "./Filter"
import CartoonDetailPage from "./CartoonDetailPage"
import FavoritesList from "./FavoritesList"
import '../App.css';
import {useHistory} from "react-router-dom"


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [cartoons, setCartoons] = useState([])
  const [search, setSearch] = useState("")
  const [eraSelect, setEraSelect] = useState("all")
  const [favorites, setFavorites] = useState([])
  const history = useHistory()
  
  
  useEffect(()=>{
    const token = null
    if(token){
      fetch(`http://localhost:3000/me`)
      .then((response) => response.json())
      .then(data => {
        setCurrentUser(data)
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




  return (
    <div class="app-container">
      <Switch>
        <Route exact path="/">
          <Header 
            currentUser ={currentUser} 
            setCurrentUser={setCurrentUser}
          />
          <Filter 
            search={search}
            onSearch={handleSearchChange}
            onEraSelect={handleEraSelect}
            cartoons={filteredCartoons}
          />
          <CartoonContainer 
            filteredCartoons ={filteredCartoons} 
            oldCartoonList={cartoons} 
            favorites={favorites}
            onAddFavorite={addFavorite}
          /> 
        </Route>

        <Route path = "/form">
        <Header 
          currentUser ={currentUser} 
          setCurrentUser={setCurrentUser}
        />
        <NewForm 
          onAddCartoon ={addCartoon}/> 
        </Route>

        <Route path ="/login"> 
          <Login setCurrentUser ={setCurrentUser}/>
        </Route>

        <Route path ="/cartoons/:id" >
          <Header 
            currentUser ={currentUser} 
            setCurrentUser={setCurrentUser}
          />
          <CartoonDetailPage />
        </Route>

        <Route path ="/favorites" >
          <Header 
            currentUser ={currentUser} 
            setCurrentUser={setCurrentUser}
          />
          <FavoritesList 
          favorites={favorites} 
          setFavorites={setFavorites}
          filteredCartoons ={filteredCartoons} 
          />

        </Route>

      </Switch>

    </div>
   );
 }
export default App;
      

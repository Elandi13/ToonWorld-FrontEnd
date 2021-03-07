import React from "react"
import { Route, Switch } from "react-router";
import MainPage from "./MainPage"



function App() {
  return (
    <div>
      <h1>
          App
        {/* <Switch>
          <Route path ="/home"> */}
            <MainPage/>
          {/* </Route>
        </Switch> */}
      </h1>
    </div>
   );
 }
export default App;
      
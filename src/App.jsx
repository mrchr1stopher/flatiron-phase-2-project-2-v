import React from "react";
import Header from "./componets/Header";
import Main from "./componets/Main";
import Catalog from "./componets/Catalog";
import NavBar from "./componets/NavBar";
import { Route, Switch } from "react-router-dom";
import AddWord from "./componets/AddWord";
import Quiz from "./componets/Quiz";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Route exact path="/header">
          <Header />
          <Route exact path="/quiz">
            <Quiz />
          </Route>
        </Route>
        <Route exact path="/addword">
          <AddWord />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

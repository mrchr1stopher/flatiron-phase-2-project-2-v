import React from "react";
import Header from "./componets/Header";
import Main from "./componets/Main";
import Footer from "./componets/Footer";
import WordBank from "./componets/WordBank";
import NavBar from "./componets/NavBar";
import { Route, Switch } from "react-router-dom";
import AddWord from "./componets/AddWord";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/wordbank">
          <WordBank />
        </Route>
        <Route exact path="/header">
          <Header />
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

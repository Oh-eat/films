import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </main>
    </>
  );
}

export default App;

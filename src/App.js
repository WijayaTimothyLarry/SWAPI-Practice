import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/loginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <div className="App">
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/user" component={UserPage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect exact from="/" to="/login" />
          <Redirect to="/404" />
        </Switch>
      </main>
    </div>
  );
};

export default App;

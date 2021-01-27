import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import TopNavbar from "./components/topnavbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MoviesForm from "./components/moviesForm";

function App() {
  return (
    <div>
      <TopNavbar />
      <Switch>
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/movies/:id" component={MoviesForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/page-not-found" component={NotFound} />
        <Route path="/" exact component={Movies} />
        <Redirect to="/page-not-found" />
      </Switch>
    </div>
  );
}

export default App;

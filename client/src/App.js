import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import "./App.css";

class App extends Component {
  render() {
    return (
      
        <div>
          <Nav />
          <Banner />
          <Search />
          <Results />
        </div>
      
    );
  }
}

export default App;

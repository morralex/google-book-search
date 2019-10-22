import React from "react";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";
import Try from "../components/InS/Try";


function Search () {

    return (
      <div>
       <Nav />
        <div className="container">
          <Banner />
          <Try />
        </div>
      </div>
    );
    
  }


export default Search;
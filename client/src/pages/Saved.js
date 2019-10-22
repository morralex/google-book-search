import React from "react";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";
import Results from "../components/Results/Results";


function Saved() {

    return (
        <div>
            <Nav />
            <div className="container">
                <Banner />
                <Results />
            </div>
        </div>
    );
}

export default Saved;
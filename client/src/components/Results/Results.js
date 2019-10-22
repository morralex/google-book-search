import React, { Component } from "react";

class Results extends Component {
    state = {
        image: "",
        title: "",
        author: "",
        plot: ""
    }
    render() {
        return (

            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="list-overflow-container">
                            <ul className="list-group"></ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Results;
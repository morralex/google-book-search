import React, { Component } from "react";
import axios from "axios";


class Try extends Component {
    state = {
        // usersearch: "",
        results: [],
        value: ""
    }

    componentDidMount() {
        this.searchGB(("Anthem").trim())
    }

    componentDidUpdate() {
        console.log('Update')
    }

    searchGB = (value) => {
        console.log("running searchGB");
        // console.log(query)
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + value)
            .then(res => this.setState({ results: res.data.items[0].volumeInfo, value: value },
                console.log(res.data.items[0].volumeInfo)
            ))
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }


    handleSubmit = event => {
        console.log("running handleSubmit");
        event.preventDefault();
        this.searchGB(this.element.value)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col m12">
                        <h5 className="header">Book Search</h5>
                        <div className="card horizontal">
                            <div className="col s3 card-image">
                                <img type="img" src="https://theimpactnews.com/wp-content/uploads/2018/09/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.web_.652.375.jpg" alt="#" />
                            </div>
                            <div className="col 9 card-stacked">
                                <div className="card-content">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                ref={el => this.element = el}
                                                name="value"
                                                value={this.state.search}
                                                onChange={this.handleInputChange}
                                            />
                                            <label>Book</label>
                                            <button className="btn waves-effect waves-light right" type="submit" name="action">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="card-panel">
                            <div className="list-overflow-container display">
                                <ul className="list-group">{this.state.value}</ul>
                            </div>
                            <div className="row">
                                {/* <div className="col s4">
                                    <img src={this.state.results.imageLinks} alt="no-img-avl"  />
                                </div> */}
                                <div className="col s6">
                                    <h5>Title: </h5><h6>{this.state.results.title}</h6>
                                    <h5>Author: </h5><h6>{this.state.results.authors}</h6>
                                    <h5>Description: </h5><h6>{this.state.results.description}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Try;
import React, { Component } from "react";
import axios from "axios";

class Try extends Component {
    state = { 
        seach: "",
        results: []
     }

    componentDidMount() {
        this.searchGB(("Anthem").trim())
    }

    searchGB = query => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then(res => this.setState({ results: res.data.items[0].volumeInfo },
            console.log(res.data.items[0].volumeInfo)
            ))
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ value: this.element.value })
        this.searchGB(this.state.value)
        
        console.log(this.state.value)
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
                                                name="usersearch"
                                                value={this.state.name}
                                                onChange={this.state.handleInputChange}
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
                                <div>{this.state.res}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Try;
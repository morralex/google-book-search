import React from "react";

function Search() {
    return (

        <div class="row">
            <div class="col m12">
                <h5 class="header">Book Search</h5>
                <div class="card horizontal">
                    <div class="col s3 card-image">
                        <img src="https://theimpactnews.com/wp-content/uploads/2018/09/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.web_.652.375.jpg" />
                    </div>
                    <div class="col 9 card-stacked">
                        <div class="card-content">
                            <div class="input-field">
                                <input type="text" id="autocomplete-input" class="autocomplete" />
                                <label for="autocomplete-input">Book</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;


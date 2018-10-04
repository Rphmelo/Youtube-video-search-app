import React, { Component }  from "react";

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: 'Starting Value'};
    }

    render() {
        return (
            <div className="search-bar search-container">
                <form>
                    <input type="text" placeholder="Type something to search a video"
                           onChange={event => this.setState({term: event.target.value})}/>
                    <button type="button"
                            className="btn"
                            onClick={() => this.props.onSearchTermChange(this.state.term)}>
                        <span aria-hidden="true">Search</span>
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
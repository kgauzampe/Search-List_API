import React from 'react';
import './search.css';
import axios from 'axios'

class Search extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    }

    fetchResults = (updatedPageNo,) => {
        
    };

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({query : query, loading: true, message: ''})
    };
    render() {
        const {query} = this.state
        return (
            <div className="container">
                <h1 className="heading"> Search Movies</h1>
                <label className="search_label " htmlFor="search-input">
                    <input
                        type="text"
                        name="query"
                        value={query}
                        id="search-input"
                        placeholder="search..."
                        onChange={this.handleOnInputChange}
                    
                    />
                   <i className="fa fa-search search-icon" aria-hidden="true"/> 
                </label>
            </div>
        )
    }

}

export default Search;
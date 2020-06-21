import React from 'react';
import '../search,css'

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
    render() {
        return (
            <div className="container">
                <h1 className="heading"> Search Movies</h1>
                <label className="search_label " htmlFor="search-input">
                    <input
                        type="text"
                        value=""
                        id="search-input"
                        placeholder="search..."
                    
                    />
                   <i className="fa fa-search" aria-hidden="true"/> 
                </label>
            </div>
        )
    }

}

export default Search;
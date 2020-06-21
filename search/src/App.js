import React, {Component} from 'react';


class  App extends Component() {

    constructor(props) {
        super(props);
        this.state = {
            Movies: [],
            loaded: false,
        }
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1302d05c')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    loaded: true,
                    Movies: json, 
                })

            });
    }

    render() {

        let { loaded, Movies} = this.state

        if (!loaded) {
            return <div>Loading...</div>
        } else { 
            return (
                <div className="App">
                    <ul>
                        {Movies.map(Movies => (
                            <li key={Movies.id}>
                                {Movies.Title} | {Movies.Year} | {Movies.Rated}

                            </li>
                        ))};
                    </ul>
                </div>
            )
        }
       
    }
  
}
export default App;

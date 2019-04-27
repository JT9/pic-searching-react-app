import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    //callback function
    onSearchSubmit(term) {
        //console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 1e1f62fa1554eeccce44fb897964111d8d58e44a47fa4c576b2a9b1ec30f190f'
            }
        }).then(response => {
            console.log(response.data.results);
        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;
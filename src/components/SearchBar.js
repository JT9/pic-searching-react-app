import React from 'react';

//Class based component due to user input
class SearchBar extends React.Component {
    state = { term: ''};
    render() {
        return ( 
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term }
                        onChange={(e) => this.setState({ term: e.target.value })} 
                    />
                </div>
            </form>
        </div>)
        ;
    }
}

export default SearchBar;
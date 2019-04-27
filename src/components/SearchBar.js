import React from 'react';

//Class based component due to user input
class SearchBar extends React.Component {
    render() {
        return ( 
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" />
                </div>
            </form>
        </div>)
        ;
    }
}

export default SearchBar;
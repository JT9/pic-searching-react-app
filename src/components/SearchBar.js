import React from 'react';

//Class based component due to user input
class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = (event) => {
        //Prevents browser from submitted the form when pressing enter
        event.preventDefault();
        //console.log(this.state.term);
        
        //from App.js using this(class based component not function)
        this.props.onSubmit(this.state.term)
    };
    render() {
        return ( 
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                </div>
            </form>
        </div>)
        ;
    }
}

export default SearchBar;
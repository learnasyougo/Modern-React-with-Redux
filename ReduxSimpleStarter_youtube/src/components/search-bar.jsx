import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        searchTerm: ''
    };

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.searchTerm}
                    onChange={event => this.onInputChanged(event.target.value)} />
            </div>
        );
    }

    onInputChanged(searchTerm) {
        this.setState({ searchTerm });
        this.props.onSearchTermChanged(searchTerm);
    }
}
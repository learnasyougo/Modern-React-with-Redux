import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        searchTerm: ''
    };

    onInputChange(event) {
        const searchTerm = event.target.value;
        this.setState({
            searchTerm
        });
    }

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form
                onSubmit={e => this.onSubmit(e)}
                className="input-group"
            >

                <input
                    value={this.state.searchTerm}
                    onChange={e => this.onInputChange(e)}
                    className="form-control"
                    placeholder="enter a city name"
                />

                <span className="input-group-btn">
                    <button
                        type="submit"
                        className="btn btn-secondary"
                    >
                        Submit
                    </button>
                </span>

            </form>
        );
    }
}
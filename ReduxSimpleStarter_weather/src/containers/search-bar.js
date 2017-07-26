import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(
    class SearchBar extends Component {
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
            const searchTerm = this.state.searchTerm;
            this.props.fetchWeather(searchTerm);
            this.setState({ searchTerm: '' });
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
);


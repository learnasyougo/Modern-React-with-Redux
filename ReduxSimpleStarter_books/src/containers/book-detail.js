import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(mapStateToProps)(
    class BookDetail extends Component {
        render() {
            if (!this.props.selectedBook) {
                return (
                    <div className="col-sm-4">
                        <h3>No book selected</h3>
                    </div>
                );
            }

            return (
                <div className="col-sm-4">
                    <h3>Details for:</h3>
                    <span>{this.props.selectedBook.title}</span>
                </div>
            );
        }
    }
);

function mapStateToProps(state) {
    return {
        selectedBook: state.selectedBook
    };
}

//export default connect(mapStateToProps)(BookDetail);
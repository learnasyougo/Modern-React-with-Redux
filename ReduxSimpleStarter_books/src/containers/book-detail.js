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
                    <div>Title: {this.props.selectedBook.title}</div>
                    <div>Pages: {this.props.selectedBook.pages}</div>
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
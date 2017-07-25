import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

export default connect(mapStateToProps, mapDispatchToProps)(
    class BookList extends Component {
        render() {
            if (!this.props.books) {
                return (<span>No books available.</span>);
            }

            return (
                <div>
                    <ul className="list-group col-sm-4">
                        {this.renderList()}
                    </ul>
                </div>
            );
        }

        renderList() {
            return this
                .props
                .books
                .map(book => {
                    return (
                        <li
                            key={book.title}
                            onClick={() => this.props.selectBook(book)}
                            className="list-group-item"
                        >
                            {book.title}
                        </li>
                    );
                });
        }
    }
);

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

//export default connect(mapStateToProps)(BookList);
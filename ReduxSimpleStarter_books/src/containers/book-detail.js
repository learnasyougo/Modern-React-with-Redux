import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(mapStateToProps)(
    class BookDetail extends Component {
        render() {
            if (!this.props.selectedBook) {
                return (<span>No book selected.</span>);
            }

            return (
                <div>
                    <ul className="list-group col-sm-4">
                        <li>
                            {this.props.selectedBook.title}
                        </li>
                    </ul>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../../actions';

export default connect(null, { addNewPost })(
    class NewPost extends Component {
        render() {
            return (
                <div>
                    <h3>Add new post</h3>
                    <form>
                    </form>
                </div>
            );
        }
    }
);
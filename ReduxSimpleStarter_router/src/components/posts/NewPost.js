import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export default reduxForm({ form: 'NewPostForm' })(
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
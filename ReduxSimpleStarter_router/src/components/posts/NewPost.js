import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export default reduxForm({ form: 'NewPostForm' })(
    class NewPost extends Component {
        renderTitleField(field) {
            return (
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        {...field.input}
                        id="title"
                        className="form-control"
                        type="text"
                    />
                </div>
            );
        }

        renderCategoryField(field) {
            return (
                <div className="form-group">
                    <label htmlFor="categories">Categories</label>
                    <input
                        {...field.input}
                        id="categories"
                        className="form-control"
                        type="text"
                    />
                </div>
            );
        }

        render() {
            return (
                <div>
                    <h3>Add new post</h3>
                    <form>
                        <Field
                            name="title"
                            component={this.renderTitleField}
                        />
                        <Field
                            name="categories"
                            component={this.renderCategoryField}
                        />
                    </form>
                </div>
            );
        }
    }
);
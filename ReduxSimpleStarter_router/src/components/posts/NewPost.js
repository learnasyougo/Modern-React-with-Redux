import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export default reduxForm({ validate, form: 'NewPostForm' })(
    class NewPost extends Component {
        renderField(field) {
            const inputClassName = field.meta.error && field.meta.touched ? 'form-group has-danger' : 'form-group';

            return (
                <div className={inputClassName}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        {...field.input}
                        className="form-control"
                        type="text"
                    />
                    <span className="text-help">{field.meta.touched ? field.meta.error : ''}</span>
                </div>
            );
        }

        onSubmit(values) {

        }

        render() {
            const { handleSubmit } = this.props;

            return (
                <div>
                    <h3>Add new post</h3>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            name="title" label="Title"
                            component={this.renderField}
                        />
                        <Field
                            name="categories" label="Categories"
                            component={this.renderField}
                        />
                        <Field
                            name="content" label="Content"
                            component={this.renderField}
                        />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            );
        }
    }
);

function validate(values) {
    let errors = {};

    if (!values.title || values.title.length < 3) {
        errors.title = 'Enter a title that is at least three characters long';
    }
    if (!values.categories) {
        errors.categories = 'Enter at least one category';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}
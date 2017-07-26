import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addNewPost } from '../../actions';

export default reduxForm({ validate, form: 'NewPostForm' })(
    connect(null, { addNewPost })(
        class NewPost extends Component {
            renderField(field) {
                const { meta: { touched, error }, name, label, input } = field;
                const inputClassName = error && touched
                    ? 'form-group has-danger'
                    : 'form-group';

                return (
                    <div className={inputClassName}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            {...input}
                            className="form-control"
                            type="text"
                        />
                        <span className="text-help">{touched ? error : ''}</span>
                    </div>
                );
            }

            onSubmit(values) {
                this.props.addNewPost(values);
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
                            <Link to="/" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                );
            }
        }
    )
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
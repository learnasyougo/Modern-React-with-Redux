import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions';

function mapStateToProps({ posts }, ownProps) {
    const { id } = ownProps.match.params;
    const post = posts[id];
    return { post };
}

export default connect(mapStateToProps, { getPost })(
    class PostDetail extends Component {
        componentDidMount() {
            const { id } = this.props.match.params;
            this.props.getPost(id);
        }

        render() {
            const { post } = this.props;

            if (!post) {
                return (
                    <div>Loading...</div>
                );
            }

            return (
                <div>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }
    }
);


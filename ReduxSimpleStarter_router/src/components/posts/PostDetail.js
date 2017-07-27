import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../../actions';

function mapStateToProps({ posts }, ownProps) {
    const { id } = ownProps.match.params;
    const post = posts[id];
    return { post };
}

export default connect(mapStateToProps, { getPost, deletePost })(
    class PostDetail extends Component {
        componentDidMount() {
            if (!this.props.post) {
                const { id } = this.props.match.params;
                this.props.getPost(id);
            }
        }

        onDelete(event) {
            const { id: postId } = this.props.match.params;
            this.props.deletePost(postId, () => {
                this.props.history.push('/');
            });
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
                    <div className="text-xs-right">
                        <Link to="/" className="btn btn-default">Back to index</Link>
                        <button
                            onClick={e => this.onDelete(e)}
                            className="btn btn-danger"
                        >
                            Delete post
                        </button>
                    </div>

                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }
    }
);


import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions';

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { getPosts })(
    class PostList extends Component {
        componentDidMount() {
            this.props.getPosts();
        }

        renderPostList() {
            if (!this.props.posts) {
                return (
                    <span>No posts available, <Link to="/posts/new">try writing your first one</Link>!</span>
                );
            } else {
                return (
                    <ul className="list-group">
                        {_.map(this.props.posts, this.renderPostListItem)}
                    </ul>
                );
            }
        }
        renderPostListItem(post) {
            return (
                <li key={post.id} className="list-group-item post-item">
                    {post.title}
                </li>
            );
        }

        render() {
            return (
                <div>
                    <div className="text-xs-right">
                        <Link to="/posts/new" className="btn btn-primary">
                            Add new post
                        </Link>
                    </div>
                    <h3>Posts</h3>
                    {this.renderPostList()}
                </div>
            );
        }
    }
);
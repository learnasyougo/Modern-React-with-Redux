import axios from 'axios';

const apiRootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = 'gDurknsiof';
function buildRequest(endpoint) {
    return `${apiRootUrl}${endpoint}?key=${apiKey}`;
}

export const FETCH_POSTS = 'fetch_posts';
export function getPosts() {
    const requestUrl = buildRequest('/posts');
    const request = axios.get(requestUrl);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export const ADD_NEW_POST = 'add_new_post';
export function addNewPost(values, navigationCallback) {
    const requestUrl = buildRequest('/posts');
    const request = axios
        .post(requestUrl, values)
        .then(() => navigationCallback());

    return {
        type: ADD_NEW_POST,
        payload: request
    };
}
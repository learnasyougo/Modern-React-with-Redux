import axios from 'axios';

const apiRootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = 'gDurknsiof';
function buildRequest(endpoint) {
    return `${apiRootUrl}${endpoint}?key=${apiKey}`;
}
function buildAction(type, payload) {
    return {
        type,
        payload
    };
}
export const FETCH_POSTS = 'fetch_posts';
export function getPosts() {
    const requestUrl = buildRequest('/posts');
    const request = axios.get(requestUrl);

    return buildAction(FETCH_POSTS, request);
}

export const FETCH_POST = 'fetch_post';
export function getPost(id) {
    const requestUrl = buildRequest(`/post/${id}`);
    const request = axios.get(requestUrl);

    return buildAction(FETCH_POST, request);
}

export const ADD_NEW_POST = 'add_new_post';
export function addNewPost(values, navigationCallback) {
    const requestUrl = buildRequest('/posts');
    const request = axios
        .post(requestUrl, values)
        .then(() => navigationCallback());

    return buildAction(ADD_NEW_POST, request);
}
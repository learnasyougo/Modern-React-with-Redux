import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const apiRootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = 'gDurknsiof';
function buildRequest(endpoint) {
    return `${apiRootUrl}${endpoint}?key=${apiKey}`;
}

export function getPosts() {
    const requestUrl = buildRequest('/posts');
    const request = axios.get(requestUrl);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function addNewPost() {
    const requestUrl = buildRequest('/posts');
    const request = axios.get(requestUrl);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
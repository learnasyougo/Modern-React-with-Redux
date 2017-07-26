import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const apiRootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = 'gDurknsiof';
function buildRequest(endpoint) {
    return `${apiRootUrl}${endpoint}?key=${apiKey}`;
}

export function getPosts() {
    const request = axios.get(buildRequest('/posts'));

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
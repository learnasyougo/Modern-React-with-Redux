import _ from 'lodash';

import {
    FETCH_POSTS,
    FETCH_POST,
    DELETE_POST,
    ADD_NEW_POST
} from '../../actions/index'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            const post = action.payload.data;
            return { ...state, [post.id]: post };
        default:
            return state;
    }
}
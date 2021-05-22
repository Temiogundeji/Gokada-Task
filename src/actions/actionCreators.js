import { postConstants } from '../constants';

export const setPostsSuccess = (payload) => {
    return {
        type: postConstants.FETCH_POSTS_SUCCESS,
        payload
    }
}

export const setPostsRequest = () => {
    return {
        type: postConstants.FETCH_POSTS_REQUEST
    }
}

export const setPostFailure = (payload) => {
    return {
        type: postConstants.FETCH_POSTS_FAILURE,
        payload
    }
}
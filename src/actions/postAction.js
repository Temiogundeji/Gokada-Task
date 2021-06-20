import { postAPI } from '../shared';
import { setPostsRequest, setPostsSuccess, setPostFailure } from './actionCreators';

export const getAllPosts = () => {
    return (dispatch) => {
        dispatch(setPostsRequest());
        return fetch(postAPI.posts)
            .then((response) => response.json())
                .then((data) => {
                    let { status, articles } = data;
                    articles = articles.splice(0, 10);
                    if(status === 'ok'){
                        dispatch(setPostsSuccess(articles));
                    }
            })
            .catch(err => {
                dispatch(setPostFailure());
                alert(err);
            })
    }
}
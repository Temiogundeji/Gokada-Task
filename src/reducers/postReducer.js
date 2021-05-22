import { postConstants } from "../constants/post";

const initialState = {
    fasts: [],
    isLoading:true,
    error: null
};

export const postReducer = (state = initialState, action) =>  {
  const { type, payload } = action;

  switch (type) {
    case postConstants.FETCH_POSTS_REQUEST: 
        return { 
            isLoading: true,
        };
    case postConstants.FETCH_POSTS_SUCCESS:
        return {
            ...state,
            isLoading: false,
            posts: [...payload]
        }
    case postConstants.FETCH_POSTS_FAILURE: 
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    default:
      return state;
  }
}

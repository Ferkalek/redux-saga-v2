import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState = {
  posts: [],
  fetchPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload]) }; // 1-st variant
    //   return { ...state, posts: [...state.posts, action.payload] }; // 2-nd variant

    case FETCH_POSTS:
      return { ...state, fetchPosts: action.payload };

    default:
      return state;
  }
};

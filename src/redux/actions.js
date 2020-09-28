import {
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_POSTS,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  };
  // first variant with redux-thunk
  /*return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      "http://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (!response.ok) {
      dispatch(showAlert(response.statusText, "warning", 1000));
      dispatch(hideLoader());
      return;
    }

    const json = await response.json();

    const data = json.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.body,
    }));

    setTimeout(() => {
      dispatch({ type: FETCH_POSTS, payload: data });
      dispatch(hideLoader());
    }, 1000);
  };*/
  // second variant with SAGA
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text, status, time) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        text,
        status,
      },
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, time);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

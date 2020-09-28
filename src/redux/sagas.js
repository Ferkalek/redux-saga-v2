// for saga
import { takeEvery, put, call } from "redux-saga/effects";
import { hideLoader, showAlert, showLoader } from "./actions";
import { FETCH_POSTS, REQUEST_POSTS } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPostsFunc);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (error) {
    yield put(showAlert("Fetch API cannot load", "info", 1500));
    yield put(hideLoader());
  }
}

async function fetchPostsFunc() {
  const response = await fetch(
    "http://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const json = await response.json();

  return await json.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.body,
  }));
}

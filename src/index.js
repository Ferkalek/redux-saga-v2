import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"; // for saga

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "./redux/rootReducer";
import { spamWordsMiddleware } from "./redux/middleware";
import { sagaWatcher } from "./redux/sagas"; // for saga

const saga = createSagaMiddleware(); // for saga
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, spamWordsMiddleware, saga))
);

saga.run(sagaWatcher); // for saga

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

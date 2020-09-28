import React from "react";

import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import PostsFetch from "./components/PostsFetch";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>

      <div className="row pt-3">
        <div className="col">
          <h4>Posts</h4>
          <Posts />
        </div>
        <div className="col">
          <h4>Fetch Posts</h4>
          <PostsFetch />
        </div>
      </div>
    </div>
  );
}

export default App;

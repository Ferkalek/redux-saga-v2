import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p>There isn't any posts.</p>;
  }
  return syncPosts.map((post) => <Post key={post.id} post={post} />);
};

const matStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(matStateToProps, null)(Posts);

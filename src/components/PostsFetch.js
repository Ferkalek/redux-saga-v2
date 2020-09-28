import React from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import Loader from "./Loader";
import { fetchPosts } from "../redux/actions";

// 1st variant with use HOC useDispatch and useSelector
export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchPosts);
  const isLoading = useSelector((state) => state.app.loading);

  if (isLoading) {
    return <Loader />;
  }
  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Load posts
      </button>
    );
  }
  return posts.map((post) => <Post key={post.id} post={post} />);
};

// 2nd variant with use redux connect
// const FetchPosts = ({ syncFetchProps, fetchPosts }) => {
//   if (!syncFetchProps.length) {
//     return (
//       <button className="btn btn-primary" onClick={() => fetchPosts()}>
//         Load posts
//       </button>
//     );
//   }
//   return syncFetchProps.map((post) => <Post key={post.id} post={post} />);
// };

// const mapStateToProps = (state) => {
//   return {
//     syncFetchProps: state.posts.fetchPosts,
//   };
// };
// const mapDispatchToProps = {
//   fetchPosts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FetchPosts);

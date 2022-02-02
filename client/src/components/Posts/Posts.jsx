import React from "react";
import useStyles from "./styles.js";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => {
    return state.posts;
  });
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;

import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>아직 게시물이 없습니다.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;

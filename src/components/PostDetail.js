import React from "react";
import Header from "./Header";
import PostsData from "../constants/PostsData";
import CommentsData from "../constants/CommentsData";
import AuthorData from "../constants/AuthorData";
import "./PostDetail.css";

function PostDetail(props) {
  let postId = props.match.params.postId;
  postId = Number(postId);
  const post = PostsData.find((post) => post.id === postId);

  return (
    <div>
      <Header />

      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <h4>Posted by:</h4>
        <p>{AuthorData.name}</p>
        <p>{AuthorData.username}</p>
      </div>
      {/* Did not found comments for each post so adding the same comments for every post */}
      <h4>Comments</h4>
      {CommentsData.map((comment) => {
        return (
          <div key={comment.id} className="comment">
            <p>-{comment.name}</p>
            <p>--{comment.body}</p>
            <p>
              <h5 class="quote">Commented by: {comment.email}</h5>
            </p>
          </div>
        );
      })}

      <p></p>
    </div>
  );
}

export default PostDetail;

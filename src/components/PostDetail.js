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
      {/* This is the post section which will contain the post details */}
      {/* Did not found Author for each post so assigning same author to all the posts */}
      <div className="post">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
        <h4 className="quote-one">
          Posted by: {AuthorData.name} {AuthorData.username}
        </h4>
      </div>
      {/* This is the comments section which will contain all the comments */}
      {/* Did not found comments for each post so adding the same comments for every post */}
      <h4 className="topic">Comments</h4>
      {/* Used Map function to map all the comments from the array */}
      {CommentsData.map((comment) => {
        return (
          <div key={comment.id} className="comment">
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
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

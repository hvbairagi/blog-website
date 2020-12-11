import React from "react";
import { NavLink } from "react-router-dom";
import "./PostTitle.css";
import PostsData from "../constants/PostsData";
import Header from "./Header";

function PostTitle(props) {
  return (
    <div className="post-container">
      {/* Used Map function to map all the post titles from gthe array */}
      {/* Used Navlink to redirect user to the post with the same id */}
      <Header />
      <div className="post-title">
        {PostsData.map((post) => {
          return (
            <NavLink className="navlink" to={`/post/${post.id}`}>
              <div key={post.id} className="post">
                {post.title}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default PostTitle;

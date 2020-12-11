import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./PostTitle.css";
import PostsData from "../constants/PostsData";
import Header from "./Header";

function PostTitle(props) {
  return (
    <div className="post-container">
      <Header />
      <Link to="/post" className="link">
        <div className="post-title">
          {PostsData.map((post) => {
            return (
              <NavLink to={`/post/${post.id}`}>
                <div key={post.id} className="post">
                  {post.title}
                </div>
              </NavLink>
            );
          })}
        </div>
      </Link>
    </div>
  );
}

export default PostTitle;

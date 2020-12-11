import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import PostTitle from "./components/PostTitle";

import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/post/:postId" component={PostDetail} />

          <Route path="/">
            <PostTitle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

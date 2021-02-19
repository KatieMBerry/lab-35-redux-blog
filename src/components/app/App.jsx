import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../headers/Header';
import BlogForm from '../form/BlogForm';
import BlogDetail from '../details/BlogDetail';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact path="/"
          component={BlogForm} />
        <Route
          path="/blogs/:index"
          component={BlogDetail} />
      </Switch>
    </Router>
  );
}

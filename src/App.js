import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './components/HomePage';
import PostsPage from './components/PostsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={PostsPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

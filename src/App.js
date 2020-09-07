import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './components/HomePage';
import PostPage from './components/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={PostPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

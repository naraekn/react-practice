import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './components/HomePage';
import PostsPage from './components/PostsPage';
import SearchPage from './components/SearchPage';
import MoviesPage from './components/MoviesPage';
import RestaurantsPage from './components/RestaurantsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={PostsPage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/movies" component={MoviesPage}/>
        <Route path="/restaurants" component={RestaurantsPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

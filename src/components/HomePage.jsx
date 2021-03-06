import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div>Home</div>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}
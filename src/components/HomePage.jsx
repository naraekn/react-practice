import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  );
}
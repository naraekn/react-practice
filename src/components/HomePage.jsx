import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <Link to="/posts">포스트 리스트 보기</Link>
      <Link to="/posts">포스트 리스트 보기</Link>
    </div>
  );
}
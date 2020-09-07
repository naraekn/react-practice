import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((result) => {
        console.log(result);
        setPosts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(posts);

  return (
    <>
      <ul>
        {
          posts.map((post) => (
          <li key={post.id}>{post.title}</li>
          ))
        }    
      </ul>
    </>
  );
}

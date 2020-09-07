import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try{
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');

      setPosts(result.data);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchPosts();
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

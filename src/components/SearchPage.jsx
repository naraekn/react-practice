import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function SearchPage() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  // TODO: Seperate api functions with react redux
  async function fetchPost(id) {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(result.data);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchPost(id);
  }, [id]);
  
  return (
    <div>
      <div>Search</div>
      <input 
        type="text" 
        value={id} 
        onChange={(e) => setId(e.target.value)}
      />
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </div>
  );
}
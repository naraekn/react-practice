import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function SearchPage() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => {
        setPost(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id]);

  return (
    <div>
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
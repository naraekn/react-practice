import React from 'react';

import useAxios from '../hooks/useAxios';

export default function MoviesPage() {
  const { loading, data, refetch } = useAxios({
    url: 'https://yts-proxy.now.sh/list_movies.json',
  });

  const movies = data?.data?.data?.movies;

  return (
    <>
      <div>Movies</div>
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : "Success"}</h2>
      <button onClick={refetch}>Refetch</button>
      <ul>
        {
          movies && movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
          ))
        }
      </ul>
    </>
  );
}
import React from 'react';

import useAxios from '../hooks/useAxios';

export default function RestarauntsPage() {
  const { loading, data } = useAxios({
    url: 'https://eatgo-customer-api.ahastudio.com/regions',
  });

  const regions = data?.data;

  if(loading) {
    return (
      <div>loading</div>
    );
  }

  return (
    <ul>
      {
        regions && regions.map((region) => (
          <li key={region.id}>{region.name}</li>
        ))
      }
    </ul>
  );
}
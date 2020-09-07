import React, { useState, useEffect } from 'react';

export default function RestarauntsPage() {
  const [regions, setRegions] = useState([]);

  async function fetchRegions() {
    const url = 'https://eatgo-customer-api.ahastudio.com/regions';
    const response = await fetch(url);
    const data = await response.json();
    setRegions(data);
  }

  useEffect(() => {
    fetchRegions();
  }, []);

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
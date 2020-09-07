import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function RestarauntsPage() {
  const [regions, setRegions] = useState([]);

  async function fetchRegions() {
    try {
      const request = await axios
        .get('https://eatgo-customer-api.ahastudio.com/regions');

      setRegions(request.data);
    } catch(error) {
      console.log(error);
    }
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
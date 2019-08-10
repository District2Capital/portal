import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUserData = (url, dependencies) => {
  const [defaultData, setDefaultData] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(async () => {
    console.log('Sending axios get request to URL: ' + url);
    await axios.get(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        setDefaultData(false);
        setFetchedData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, dependencies);

  return [defaultData, fetchedData];
};
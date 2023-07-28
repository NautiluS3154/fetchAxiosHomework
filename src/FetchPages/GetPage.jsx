import React, { useEffect, useState } from 'react';
import { DATA } from '../data';

export const GetPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DATA);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          throw new Error('Ошибка на ошибке');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title} {item.albumId} {item.url} {item.thumbnailUrl}
            </li>
          ))}
        </ul>
      ) : (
        <p>Грузит...
        </p>
      )}
    </div>
  );
};
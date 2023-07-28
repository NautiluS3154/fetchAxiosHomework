import React, { useState } from 'react';
import { DATA } from '../data';

export const PutPage = () => {
  const [data, setData] = useState('');

  const UpdateData = async () => {
    try {
      const response = await fetch(DATA, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newData: data }),
      });

      if (response.ok) {
        console.log('Чото изменилось');
      } else {
        throw new Error('Ошибка на ошибке на ошибке на ошибке');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={UpdateData}>обновить</button>
    </div>
  );
};

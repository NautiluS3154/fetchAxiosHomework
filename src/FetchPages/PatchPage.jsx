import React, { useState } from 'react';
import { DATA } from '../data';

export const DatePage = () => {
  const [data, setData] = useState('');

  const handleUpdateData = async () => {
    try {
      const response = await fetch(DATA, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ updatedData: data }),
      });

      if (response.ok) {
        console.log('чтото обновилось!');
      } else {
        throw new Error('Ошибка вау');
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
      <button onClick={handleUpdateData}>Обновить</button>
    </div>
  );
};

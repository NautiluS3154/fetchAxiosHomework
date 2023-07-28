import React, { useState } from 'react';
import axios from 'axios';
import { DATA } from '../data';

export const PutPage = () => {
  const [data, setData] = useState('');

  const updateData = async () => {
    try {
      const response = await axios.put(DATA, { newData: data });

      if (response.status === 200) {
        console.log('Чтото обновилось');
      } else {
        throw new Error('не обновилось');
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
      <button onClick={updateData}>обновить</button>
    </div>
  );
};

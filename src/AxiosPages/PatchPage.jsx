import React, { useState } from 'react';
import axios from 'axios';
import { DATA } from '../data';

export const DatePage = () => {
  const [data, setData] = useState('');

  const handleUpdateData = async () => {
    try {
      const response = await axios.patch(DATA, { updatedData: data });

      if (response.status === 200) {
        console.log('ого обновилось');
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
      <button onClick={handleUpdateData}>Обновить</button>
    </div>
  );
};

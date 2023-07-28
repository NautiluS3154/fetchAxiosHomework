import React from 'react';
import axios from 'axios';
import { DATA } from '../data';

export const DatePage = () => {
  const handleDeleteData = async () => {
    try {
      const response = await axios.delete(DATA);

      if (response.status === 200) {
        console.log('чото удалилось');
      } else {
        throw new Error('чото не удалилось');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteData}>удалить</button>
    </div>
  );
};

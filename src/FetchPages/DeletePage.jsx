import React from 'react';
import { DATA } from '../data';

export const DatePage = () => {
  const handleDeleteData = async () => {
    try {
      const response = await fetch(DATA, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('ого удалилось');
      } else {
        throw new Error("вау ошибка");
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

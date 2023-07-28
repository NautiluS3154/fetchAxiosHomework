import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DATA } from '../data';

export const GetPage = () => {
  const [data, setData] = useState(null);
  const [newItem, setNewItem] = useState({ title: '', albumId: '', url: '', thumbnailUrl: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(DATA);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(DATA, newItem);
      if (response.status === 201) {
        console.log('ты чото добавил');
        fetchData();
      } else {
        throw new Error('ничего не добавил');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="title" value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} placeholder="Title" />
        <input type="text" name="albumId" value={newItem.albumId} onChange={(e) => setNewItem({ ...newItem, albumId: e.target.value })} placeholder="Album ID" />
        <input type="text" name="url" value={newItem.url} onChange={(e) => setNewItem({ ...newItem, url: e.target.value })} placeholder="URL" />
        <input type="text" name="thumbnailUrl" value={newItem.thumbnailUrl} onChange={(e) => setNewItem({ ...newItem, thumbnailUrl: e.target.value })} placeholder="Thumbnail URL" />
        <button type="submit">Добавить предмет</button>
      </form>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title} {item.albumId} {item.url} {item.thumbnailUrl}
            </li>
          ))}
        </ul>
      ) : (
        <p>Грузит...</p>
      )}
    </div>
  );
};

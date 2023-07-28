import React from 'react';
import './App.css';
import { DatePage } from './pages/DatePage'
import { GetPage } from './pages/GetPage';
import { PutPage } from './pages/PutPage';

function App() {
  return (
    <div className="App">
        {/* <DatePage />
        <div className='ppp'></div>
        <GetPage /> */}
        <PutPage />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Greet from './components/Greet/Greet';
import Counter from './components/Counter/Counter';
import StarWars from './components/StarWars/StarWars';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/greet' element={<Greet name='there' message='how are you?' />} />
        <Route path='/count' element={<Counter initialState={0} />} />
        <Route path='/api' element={<StarWars />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

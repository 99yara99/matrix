import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './app/pages/MainPage/MainPage';
import Table from './app/pages/Table/table';
import NotFoundPage from './app/pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/matrix" element={<Table />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

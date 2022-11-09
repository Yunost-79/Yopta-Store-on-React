import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import HomePage from './components/HomePage/HomePage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

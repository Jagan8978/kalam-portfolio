import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './portfolio/Layout';
import Home from './portfolio/Pages/Home';

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<div style={{padding:40}}>404 — Not Found</div>} />
      </Route>
    </Routes>
  );
}

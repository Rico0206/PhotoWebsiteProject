import React from 'react';
import Header from './Components/Header/header.js'

import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/mainPage.js';
import PortfolioPage from './Components/Pages/portfolioPage.js';


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}
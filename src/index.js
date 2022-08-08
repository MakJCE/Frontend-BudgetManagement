import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

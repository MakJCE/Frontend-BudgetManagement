import React from 'react';
import './index.css';

// router
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//redux
import { store } from './store/store';
import { Provider } from 'react-redux';
//pages
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

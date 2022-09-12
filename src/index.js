import React from 'react';
import './index.css';

// router
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//redux
import { store } from './store/store';
import { Provider } from 'react-redux';
// Cookies
import { CookiesProvider } from 'react-cookie';
//pages
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import HistoryPage from './pages/HistoryPage';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar body={<Dashboard />} />} />
          <Route path="login" element={<NavBar body={<LoginPage />} />} />
          <Route path="history" element={<NavBar body={<HistoryPage />} />} />
          <Route path="*" element={<NavBar body={<NotFound />} />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

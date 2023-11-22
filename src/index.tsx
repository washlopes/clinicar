import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AppRouter from 'router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Header />
        <AppRouter />
        <Footer />        
    </React.StrictMode>
);
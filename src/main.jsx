import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/Home/Home.jsx';
import Layout from './components/layout/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout>
    <Home />
  </Layout>
);

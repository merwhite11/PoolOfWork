import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App2.js';
// import './index.css';
import './scss/main.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
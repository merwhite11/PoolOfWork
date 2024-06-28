import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.js';
import './scss/main.scss'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
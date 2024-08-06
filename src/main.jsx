import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
const updateSW = registerSW({
  onNeedRefresh() {
    // Optionally handle when a new service worker is installed
    // For example, show a "refresh" button to the user
  },
  onOfflineReady() {
    // Optionally handle when the app is ready to work offline
  },
});

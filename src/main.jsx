import { StrictMode } from 'react'
import React from 'react'
import  ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthProvider";
import { SearchProvider } from "./context/SearchContext.jsx";
import { registerServiceWorker } from './ServiceWorkerRegistration.js';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
      <App />
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>
);

registerServiceWorker();
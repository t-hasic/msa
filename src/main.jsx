import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

/**
 * Main entry point for the MIT MSA website
 *
 * Using HashRouter instead of BrowserRouter for static hosting compatibility.
 * This ensures the site works on MIT Athena without server-side routing.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

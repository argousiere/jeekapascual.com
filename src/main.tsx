import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@argousiere/vespertina-design-system/core/tokens.css';
import '@argousiere/vespertina-design-system/core/styles.css';
import './css/app.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

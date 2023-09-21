import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { CARS } from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cars={CARS}
    />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// router
import Router from '@/app/router';
// redux
import { store } from '@/app/redux/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
// router
import Router from '@/app/router';
// redux
import { store } from '@/app/redux/store';
import { Provider } from 'react-redux';
// styling
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

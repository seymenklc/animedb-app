import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
// router
import router from '@/app/router';
import { RouterProvider } from 'react-router-dom';
// redux
import { store } from '@/app/redux/store';
import { Provider } from 'react-redux';
// styling
import 'react-loading-skeleton/dist/skeleton.css';
import './index.css';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/navigation';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer theme="dark" position="bottom-center" />
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
// toastify
import { ToastContainer } from 'react-toastify';
// router
import router from '@/app/router';
import { RouterProvider } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
// styling
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import "swiper/css";
import "swiper/css/navigation";


const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer theme="dark" position="bottom-center" />
    </Provider>
  </React.StrictMode>
);

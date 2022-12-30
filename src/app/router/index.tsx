import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// pages
import Search from '@/pages/Search';
import Landing from '@/pages/Landing';
import Details from '@/pages/Details';
// components
import Layout from '@/components/Layout';
import Favorites from '@/components/Favorites/Favorites';

export default function Router() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='search' element={<Search />} />
            <Route path='anime/:id' element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
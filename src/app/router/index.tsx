import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// pages
import Search from '@/pages/Search';
import Landing from '@/pages/Landing';
import Details from '@/pages/Details';
// components
import Layout from '@/components/Layout';
import NotFound from '@/pages/NotFound';
import Favorites from '@/pages/Favorites/Favorites';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path='favorites' element={<Favorites />} />
      <Route path='search' element={<Search />} />
      <Route path='anime/:id' element={<Details />} />
      <Route path='genre/:id' element={<Search />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);
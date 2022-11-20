
import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from './SharedLayout';
import { lazy } from "react";

const Home = lazy(() => import('page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const MovieDetails = lazy(() => import('../page/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index  element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};


// import { Home } from '../page/Home';
// import { Movies } from '../page/Movies';
// import { MovieDetails } from 'page/MovieDetails';
// import  Cast  from './Cast';
// import { Reviews } from './Reviews';

// import css from './App.module.css'
// import { NotFound } from 'page/NotFound';
// import styled from "styled-components";
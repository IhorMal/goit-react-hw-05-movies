// import css from './App.module.css'

import { Home } from 'page/Home';
// import styled from "styled-components";
import { Movies } from 'page/Movies';
import { MovieDetails } from 'page/MovieDetails';
// import { NotFound } from 'page/NotFound';
import { Route, Routes } from 'react-router-dom'
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';


// const StyledLink = styled(NavLink)`
//   color: black;
//    padding-left: 20px;
//    text-decoration: none;
//   &.active {
//     color: red;
//   }
// `;

export const App = () => {

  return (
    <Routes >
      <Route path="/" element={< SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

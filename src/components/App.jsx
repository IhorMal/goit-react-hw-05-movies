
import { SharedLayout } from './SharedLayout';
import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { MovieDetails } from 'page/MovieDetails';
import { Route, Routes } from 'react-router-dom'
import { Cast } from './Cast';
import { Reviews } from './Reviews';

// import css from './App.module.css'
// import { NotFound } from 'page/NotFound';
// import styled from "styled-components";
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
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
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

import css from './App.module.css'

import { Home } from 'page/Home';
import styled from "styled-components";
import { Movies } from 'page/Movies';
import { MovieDetails } from 'page/MovieDetails';
// import { NotFound } from 'page/NotFound';
import { Route, NavLink, Routes } from 'react-router-dom'
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';


const StyledLink = styled(NavLink)`
  color: black;
   padding-left: 20px;
   text-decoration: none;
  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div className={css.app}>
      {/* <nav className={css.nav}>
      <StyledLink to='/' and>Home</StyledLink>
      <StyledLink to='/movies'>Movies</StyledLink>
      </nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
        </Route>
       
      </Routes>
    </div>
  );
};

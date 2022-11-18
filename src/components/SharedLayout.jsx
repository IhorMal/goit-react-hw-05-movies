import { Suspense } from "react";
import { Outlet, NavLink } from 'react-router-dom'
import css from './App.module.css'
import styled from "styled-components";



const StyledLink = styled(NavLink)`
  color: black;
   padding-left: 20px;
   text-decoration: none;

  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {

    return (
        <>
            <header>
                <nav className={css.nav}>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/movies">Movies</StyledLink>
                </nav>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};
